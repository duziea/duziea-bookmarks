# python 爬取拉钩网招聘信息分析

金 9 银 10，又到了校招季，今天来看一下目前拉钩的 Python 工作技能要求和薪资待遇。

浏览器访问下

https://www.lagou.com/jobs/list_python/p-city_0?px=default&gx=&isSchoolJob=1#filterBox

观察 xhr，这个 positionajax 很可疑，看看 response，就是它了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155748535.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
请求 url

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155809830.png)
请求头

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155822878.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
参数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155833719.png)

cookie，根据前辈的经验，拉钩采用动态 token，防御伪造请求，重复提交

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155843519.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

这个 token，当第一次访问拉钩网时，会给你一个 permanent cookie

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155903104.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

我们利用 requests.session()访问获取 cookie，利用这个 cookie 值模拟 positionajax

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155923322.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

有了，将数据筛选一下，存入 json

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155933769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

用 pyecharts 看看城市分布情况

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922155944167.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

北京一枝独秀，上海、广州位列 2,3，北上广牛批。

薪资分布

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922160005471.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

五花八门，最低 1k，最高 50k，不知算什么水平，对比下 java 的

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922160015835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

使用微词云看看技能标签

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190922160023977.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

[代码地址点我](https://github.com/duziea/Python-imitate-login/blob/master/lagou/lagou_search.py)

求个 star 和关注。
