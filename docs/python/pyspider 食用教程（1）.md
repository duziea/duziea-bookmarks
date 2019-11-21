# pyspider 食用教程（1）

创建新项目，项目名称，起始 url，mode，这里我选择了百度新闻作为起始 url

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190926104234563.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

左边为调试界面，右边为预览界面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190926104240692.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

run 一下，执行 on_start 方法，返回 index_page 方法
执行 index_page 方法，这里 index_page 遍历了当前网页的 http 页面，回调 detail_page
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190926104404878.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

执行 detail_page 方法，返回当前页面的 title，url

![在这里插入图片描述](https://img-blog.csdnimg.cn/201909261044222.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

​ 返回项目页面，状态更换为 debug 或 running，run 一下

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190926104442944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
result，爬取结果，这里提供 json、urljson、csv 三种存储结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190926104458828.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
PySpider 中提取 response 的内容默认提供了一个 doc 方法，内置 pyquery 解析后结果，可以用 response.doc(你想要的内容的 css_selector)提取.

例如，我想要提取刚才新闻页面的内容

在 detail_page 方法的 return 中加入

```python
 'content':response.doc('#article > div').text()
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190926104529413.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

[关于 pyquery 的更多食用方法点我](https://zhuanlan.zhihu.com/p/34422439)

我](https://zhuanlan.zhihu.com/p/34422439)

现在你应该能爬取一些简单的网站内容了，试着爬一下吧
