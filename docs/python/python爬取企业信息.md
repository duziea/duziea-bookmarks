# python 爬取企业信息

最近需要查询企业信息，正好 python 爬虫可以自动化解决。
开始计划爬国家企业信用信息公示系统
[http://js.gsxt.gov.cn/corp-query-search-1.html](http://js.gsxt.gov.cn/corp-query-search-1.html)
大概作为众多数据网站的亲妈，服务器压力估计很大，响应起来真的慢。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190924000445582.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

当上帝关上一扇门，也会打开一扇窗，网页不行，今天就转战
app 端。
使用著名抓包工具 Charles 来看看小程序端调用的什么接口，
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190924000506208.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
这也太 awesome 了，模拟下

```python
import requests
from fake_useragent import UserAgent
import json
def gjqy(name):
    url = 'https://app.gsxt.gov.cn/gsxt/corp-query-app-search-1.html'
    headers = {
        "Host": "app.gsxt.gov.cn",
        "Accept-Encoding": "br, gzip, deflate",
        "Accept": "application/json",
        "User-Agent": UserAgent().random,
        "Accept-Language": "zh-cn",
        "Content-Length": "229",
        "Content-Type": "application/x-www-form-urlencoded",
        "Connection": "keep-alive"
    }
    data = {
        'conditions' : '{"excep_tab": "0", "ill_tab": "0", "area": "0","cStatus": "0", "xzxk": "0", "xzcf": "0", "dydj": "0"}',
        'searchword' : name,
        'sourceType' : 'W'
    }
    response = requests.post(url,headers=headers,data=data,verify=False)
    print(response)
    json_data = json.loads(response.text)
    data = json_data['data']
    result= data['result']
    data_list = result['data']
    for i in data_list:
        print(i['entName'])
if __name__ == "__main__":
    gjqy('小米')

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190924000542990.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

今天主要是传递一个解决问题的思想，当一条路难以走时，换条路试试。
