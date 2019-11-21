# python 爬 qq 音乐评论

杰伦终于出新歌了，让我们一起来看看大家的评论

[https://y.qq.com/n/yqq/song/001qvvgF38HVc4.html#comment_box](https://github.com/duziea/Python-imitate-login/blob/master/qqmusic/get_comment.py)

打开球球音乐

先看一下它的 robots

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093601262.jpg)

还是很友善的

访问一下

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093614548.jpg)

发布到目前一共 21w 评论

什么水平，对比下
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019092109363269.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
然而杰伦这首歌是 4 天前发布的，坤坤的已经发布一年了

再看下精彩评论点赞数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093642437.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093651316.jpg)
（杰伦牛批）

那么就来爬一下精彩评论，看看大家对杰伦的感情
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093659747.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
kk 参数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093706799.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093713795.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
pagesize 为每页评论数，前面看到总热评为 108，设置个大于 108 的 pagesize 即可获得所有热评。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093720828.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
json 格式的数据，看着很舒服

爬

```python
import requests
import json

def get_qq_comment():
    url = 'https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg?'
    data = {
        "biztype": "1",
        "topid": "237773700",
        "cmd": "6",
        "needmusiccrit": "0",
        "pagesize": "200",
    }
    response = requests.get(url, params=data)
    print(response)
    comments = json.loads(response.text)
    comment = comments['comment']
    commentlist = comment['commentlist']
    commentlist2 = []
    n = 0
    for i in commentlist:
        dic={}
        dic['rootcommentcontent'] = i['rootcommentcontent']
        dic['nick'] = i['nick']
        dic['praisenum'] = i['praisenum']
        dic['time'] = i['time']
        commentlist2.append(dic)

    print(len(commentlist2))
    with open('qqmusic/commentlist.json', 'w',encoding='utf-8') as f:
        json.dump(commentlist2,f,ensure_ascii=False)

if __name__ == "__main__":
    get_qq_comment()
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093750396.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
将评论制作成词云
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093758792.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)

再和坤坤 waitwaitwait 的对比下

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921093816575.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
[代码地址点我](https://github.com/duziea/Python-imitate-login/blob/master/qqmusic/get_comment.py)
