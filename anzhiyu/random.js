var posts=["2024/06/27/Hexo-入门指南/","2024/06/29/GithubPages自定义域名/","2024/06/27/hello-world/","2024/06/29/多重部署测试/","2024/07/01/深海观后感/","2024/06/30/本地自动优选IP教程/","2024/06/28/腾讯云建站失败/","2024/06/29/Macbook终端处理文本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };