# scrapy 爬取识货网商品信息

[http://www.shihuo.cn/](http://www.shihuo.cn/)

首先看一下识货的 robots.txt
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191027194843673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
其中这个 sitemap，站点地图，是给搜索引擎导航的
[sitemap 百科](https://baike.baidu.com/item/sitemap/6241567)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191027200757513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191027200818498.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
一般这里面放的是网站每天更新的页面，方便搜索引擎收录，也方便了我们爬取更新信息。

首先我们要获取商品分类
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191027203324934.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191027203557815.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
用 xpath 或 css selector 获取 ul 中的 a 标签 href 属性即为待爬取链接。meta 中传递一些参数给下个解析函数使用。

```python
def parse(self, response):
        soup = BeautifulSoup(response.text, 'lxml')
        ul = soup.select(
            'body > div.shihuo-content-wrap > div > div.top-block.clearfix > div.left-menu > ul')
        a_list = ul[0].find_all('a')
        for a in a_list[2:3]:
            link = 'http:' + a['href']
            category = a.string
            self.info['category'] = category
            self.info['category_link'] = link

            yield scrapy.Request(link,
                                 meta={
                                     'link': link
                                 },
                                 callback=self.get_info
                                 )

```

看看查询参数，构造每一页的链接，这里在获取总页数时，发现并不能直接获取，只能获取总商品数![在这里插入图片描述](https://img-blog.csdnimg.cn/20191027205544687.png)识货的总页数是靠商品总数除 pagesize 计算出来的，所以当把 pagesize 调为 7451 时，只需一页。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019102720531532.png)

```python
#获取商品列表页
def get_info(self, response):
        link = response.meta['link']
        total = int(response.xpath(
            '/html/body/div[2]/div/div[1]/div[3]/div/span/text()').get())
        pagesize = 60
        if total <= pagesize:
            totalpage = 1
        else:
            totalpage = total//pagesize + 1

        res = urlparse(link)
        scheme = res.scheme
        netloc = res.netloc
        path = res.path
        query = res.query

        for i in range(totalpage+1):
            page = f'page={i}'
            link = scheme + '://' + netloc + path+'?'+query+'&'+page

            yield scrapy.Request(link,callback=self.get_detail)
```

接下来我们已经可以获取每件商品的详情页，名字，价格
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191027210538287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

```python
def get_detail(self,response):
        shoe_list = response.xpath('//*[@id="js_hover"]/li')
        for i in shoe_list:
            detail_link ='http:'+ i.xpath('./div[1]/div/a/@href').get()
            img_link = i.xpath('./div[1]/div/a/img/@src').get()
            name = i.xpath('./div[3]/a/text()').get()
            price = i.xpath('./div[4]/span/b/text()').get()
            item = shoeItem()
            item['category'] = self.info['category']
            item['detail_link'] = detail_link
            item['img_link'] = img_link
            item['name'] = name
            item['price'] = price

            print(item)
            yield item
```

试着爬一下篮球鞋
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191028114704186.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191028115619552.png)
(⊙v⊙)嗯竟然比官网多爬了 60 个商品。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191028115854922.png)
识货的爬虫还是挺牛的，一件商品可以爬出将近 1w 条购买链接
