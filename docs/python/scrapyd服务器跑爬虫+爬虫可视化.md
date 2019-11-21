# scrapyd 服务器跑爬虫+爬虫可视化

首先我们需要

```bash
pip install scrapyd
```

[scrapyd 官方文档](https://scrapyd.readthedocs.io/en/latest/api.html)

scrapyd 是由 scrapy 官方提供的爬虫管理工具，它可以管理多个项目，每个项目可以上传多个版本，但默认使用最新版。

启动 scrapyd

```bash
scrapyd
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029160417348.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029160659880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

部署项目
[scrapyd-client 官方文档](https://github.com/scrapy/scrapyd-client)

```bash
pip install scrapyd-client
```

配置项目下的 scrapy.cfg
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019102916164643.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
**deploy 设置**

- url 服务器地址
- project 项目名
- username 服务器登录账号
- password 服务器登录密码

在本地试一下。

```bash
scrapyd-deploy
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/201910291635058.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019102916353254.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029170639749.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
scrapyd 提供的网页只能做到监控爬虫运行情况，实际控制爬虫还需要在命令行输入 curl 指令，但我想在网页端直接控制爬虫怎么办？

# 爬虫可视化操作工具

## **1.Gerapy**

[github gerapy](https://github.com/Gerapy/Gerapy)
gerapy 是国人制作的一款分布式爬虫管理框架，支持 Python 3，基于 Scrapy、Scrapyd、Scrapyd-Client、Scrapy-Redis、Scrapyd-API、Scrapy-Splash、Jinjia2、Django、Vue.js 开发。

**安装**

```bash
pip install gerapy
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029121105689.png)
输入 gerapy 提示如下，代表安装成功

```bash
 gerapy
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019102912140158.png)
gerapy 4 连，用过 django 的同学看这个应该有种熟悉的感觉。

```bash
gerapy init
cd gerapy
gerapy migrate
gerapy runserver
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029121832848.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029123956499.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029123913128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
连接 scrapyd
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029180814709.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029181333516.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
忘了启动 scrapyd，启动一下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029181425384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
点击 schedule，可以看到

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019102918162347.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
baseketball、default 为 scrapyd 当前管理的爬虫项目，shoes 为每个项目下的 spider。
run 一下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029185625953.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029185646138.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191029185806766.png)
**手动添加项目**
将之前的 jdbook 项目 move 进 gerapy 的 projects
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030111453410.png)
刷新 project，可以看到项目 jdbook
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103011173297.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
点击 deploy

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030112312609.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
build 一下，生成了 jdbook-1.0-py3.7.egg 文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030112431968.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
这里遇到个问题，今天打开 scrapyd，昨天部署的 job 没了，发现时 scrapyd 启动时的运行目录不对，换回昨天的目录就好了。
将项目部署到制定 client
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030123317949.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
在 client 中就可以看到 jdbook，run 一下。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103012343786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

## **2.spiderkeeper**

[github spiderkeeper](https://github.com/DormyMo/SpiderKeeper/)

```bash
pip install spiderkeeper
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103014450489.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103014453856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
默认的 url 为 0.0.0.0:5000,
username，password 都为 admin
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030145523382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
新建一个项目，名字随意，现在已经成功创建了一个项目，接下来需要上传项目的.egg 文件,之前 gerapy 部署时，调用 scrapydAPI 接口自动生成.egg
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103014584786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
这里需要我们在 scrapy 项目根目录下输入如下指令生成

```bash
scrapyd-deploy -p 项目名 -v 版本名 --build-egg=egg包名.egg
```

在 jobdashboard 可以看到爬虫的运行情况
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030154820743.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
run once 开始运行爬虫，可以设定，爬取速度、参数、和运行服务器
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030154949457.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

spiderkeeper 还有一个定时爬虫功能，对于需要周期性运行的爬虫，可以设定周期时间
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030155933312.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030161755409.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

## **3.scrapydweb**

[scrapydweb 官方文档](https://github.com/my8100/files/blob/master/scrapydweb/README_CN.md)

```bash
pip install scrapydweb
```

执行

```bash
scrapydweb
```

会在当前目录下生成一个 scrapydweb_settings_v10.py 文件，
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030164637520.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
简单配置下

```python
############################## QUICK SETUP start ##############################
############################## 快速设置 开始 ###################################
# Setting SCRAPYDWEB_BIND to '0.0.0.0' or IP-OF-THE-CURRENT-HOST would make
# ScrapydWeb server visible externally; Otherwise, set it to '127.0.0.1'.
# The default is '0.0.0.0'.
SCRAPYDWEB_BIND = '0.0.0.0'
# Accept connections on the specified port, the default is 5000.
SCRAPYDWEB_PORT = 5000

# The default is False, set it to True to enable basic auth for the web UI.
ENABLE_AUTH = False
# In order to enable basic auth, both USERNAME and PASSWORD should be non-empty strings.
USERNAME = 'admin'
PASSWORD = 'admin'
```

再次执行 scrapydweb，登录
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103017010183.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
部署
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030173739924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
run spider。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030173846685.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
这个框架功能很强大，发送邮件，移动端 ui 等。

## **4.SpiderAdmin**

```bash
pip install spideradmin
```

[github spideradmin](https://github.com/mouday/SpiderAdmin)

初始化，在当前目录下生成 config.py

```bash
spideradmin init
```

```python
# -*- coding: utf-8 -*-

# 配置示例

# 批量配置scrapyd 服务器地址
SCRAPYD_SERVERS = [
    # 别名（唯一）， 服务器地址
    ("master", "http://127.0.0.1:6800/"),
]

SECRET_KEY = "2QDq4HSpT8U4W6iZ2xDzGW3CcY2WVsJXVEwYv0qludY="

# 配置端口号
HOST = None
PORT = None

# 登录账号密码
BASIC_AUTH_USERNAME = "admin"
BASIC_AUTH_PASSWORD = "123456"

# 如果为 True 整个站点都验证， 默认不验证
BASIC_AUTH_FORCE = False

# 执行结果数据库配置
ITEM_LOG_DATABASE_URL = None
ITEM_LOG_TABLE = None

```

spideradmin 启动服务

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103018362182.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030185438772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
暂时不支持 web 部署项目，官方推荐使用如下命令部署

```bash
scrapyd-deploy -a
```

可以运行爬虫，设置定时
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030185624581.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
支持任务控制，日志查询

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030185802479.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

## **5.scrapyart**

[https://scrapydart.readthedocs.io/zh/latest/](https://scrapydart.readthedocs.io/zh/latest/)
官方说明
scrapydArt 在 scrapyd 基础上新增加了权限验证、爬虫调用情况统计、页面样式美化、运行信息统计以及新增加几个 api 等。对于爬虫管理，奎因的理念是"将 80%的情况掌握在自己手中"
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191031093030606.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019103109310651.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
总的来说是一个增加了权限认证，爬虫运行信息统计的增强版 scrapyd
