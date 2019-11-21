# 联系方式

- 手机：17751500229
- Email：1040230003@qq.com
- QQ：1040230003

# 个人信息

- 任伟/男/1996
- 本科/淮阴工学院计算机系
- 技术博客：[个人博客](http://duziea.xyz/) 、 [CSDN](https://blog.csdn.net/qq_34192032)、 [Github](https://github.com/duziea)

# 工作经历

## 无锡佰信宏达信息科技有限公司（ 2018 年 7 月 ~ 2018 年 12 月 ）

- 根据需要爬取的数据进行分析，分析目标网站结构，反爬方法。
- 使用 requests，selenium，scrapy 等技术进行内容抓取

# 项目经历

- **企业信息爬取**
  分析国家企业信息公示系统、企查查等查询网站的网页结构，抓包小程序端的 api，对网站采用的 cookie，ip，ua 反爬措施，采用模拟登录，使用代理 ip，伪造 ua，模拟请求爬取企业相关信息，存为 csv。
- **识货网商品信息爬取**
  分析识货网商品信息结构，识货网没有反爬措施，使用 xpath，beautifulsoup 解析网页，提取商品名称，分类，价格，购买链接等信息，使用 scrapy-redis 构造分布式爬虫爬取，将数据持久化到 mongodb 中，分析了识货 robot.txt，其中将每日新增的商品链接写入 sitemap，后续增量爬取时只需爬取这个 sitemap。
- **哔哩哔哩模拟登录**
  b 站采用极验滑动验证码反爬，js 生成 gt、challenge、w 加密参数，访问极验接口获取 slide.js、滑块图、缺口图、背景图，记录用户滑动信息，再次访问接口，验证滑动信息，js 加密中混淆代码过多，技术底蕴还不够，无法 post 过，只能采用 selenium+webdriver 模拟，两次 for 循环图片 x，y 轴，使用 pillow 解析滑块图，缺口图，背景图 rgb 值，比对，计算滑动距离，模拟滑动轨迹。
- **淮工二手信息网站**
  使用 vue，django，drf 搭建的前后端分离的校园二手信息网站，model 建商品分类，信息表，views 处理前端的请求，orm 操作数据库的增删改查，serializers 将数据库的信息序列化为 json 格式给前端，将前端发送的数据验证后反序列化存入数据库，使用 django xadmin 搭建后台管理。

- **微信小程序**
  由于吃饭时的选择困难，使用 Uniapp 制作了一个"恰啥"小程序，从菜单中随机选择，支持菜单的增删查。

# 技能清单

- 熟练掌握 python,常用的算法和数据结构
- 熟练掌握 requests、Selenium、webdriver、pyppeteer 模拟请求，应对常见的 css 字体加密，js 加密，验证码，ua，cookie 反爬。
- 熟练掌握 BeautifulSoup、re、json、XPath、CSS Selector 解析网页提取数据
- 熟练使用 Scrapy，scrapy-redis 构建分布式爬虫，阅读过 scrapy-redis 组件的源代码了解分布式爬虫原理。
- 熟练使用 charles,mitm 抓包移动端 app 小程序
- 使用过 Django、DRF、flask 框架，了解 RESTFUL 设计风格
- 使用过 python 操作 MongoDB，MySQL，Redis 数据库。
- 使用过 Vue、Uniapp 制作简单前端页面，了解 HTML、CSS、js。

---

# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。
