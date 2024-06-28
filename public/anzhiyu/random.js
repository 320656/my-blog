var posts=["2024/06/27/hello-world/","2024/06/27/Hexo-入门指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };