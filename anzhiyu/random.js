var posts=["2024/06/27/Hexo-入门指南/","2024/06/29/Macbook终端处理文本/","2024/06/28/国内服务器失败教训/","2024/06/27/hello-world/","2024/06/29/多重部署测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };