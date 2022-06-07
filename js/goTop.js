 //1.获取元素
 var goTop = document.querySelector('.goTop')

 //2.绑定滚动事件
 window.onscroll = function () {
     //2-1.获取浏览器卷去的高度
     var height = document.documentElement.scrollTop || document.body.scrollTop

     //2-2. 判断卷去的高度
     if(height >= 200){ 
         //显示  
         goTop.style.display = 'block'
     }else {
         //隐藏
         goTop.style.display = 'none'
     }
 }

 //3.绑定点击事件
 goTop.onclick = function () {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     })
 }