# Python selenium 批量导出 csdn 文章

最近自己用 vuepress 搭了个博客，由于之前写博客都是在 CSDN 网页中写，没留本地文件，所以想把 CSDN 的博客文章迁移过去，看到 CSDN 有个博客搬家
![在这里插入图片描述](https://img-blog.csdnimg.cn/201911181934093.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTkyMDMy,size_16,color_FFFFFF,t_70)
但只开放了搬进来的借口，不能搬出去，好在 CSDN 提供了导出为 md 文件，可以下载下来，曲线搬家。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191118193541803.png)
这里采用 Python+selenium 模拟导出过程，效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019111819541017.gif)

具体代码见 github
[https://github.com/duziea/CSDN-article-export](https://github.com/duziea/CSDN-article-export)
