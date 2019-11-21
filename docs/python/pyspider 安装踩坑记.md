# pyspider 安装踩坑记

## 1.pip install pycurl 无法安装

解决办法：下载对应的 pycurl.whl 离线安装

[下载网址点我](https://www.lfd.uci.edu/~gohlke/pythonlibs/)

pycurl-7.43.0.3-cp37-cp37m-win_amd64.wh

[腾讯微云](https://share.weiyun.com/5PekVmn)

## 2.Deprecate option 'domaincontroller'

解决办法，wsgidav 降级

`pip uninstall wsgidav`

`pip install wsgidav == 2.4.1`

## 放两张成功后的图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190926083402356.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/2019092608340640.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
