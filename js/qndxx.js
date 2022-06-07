window.onload = function(){
    var oDiv = document.getElementById('div1');
    var content = document.getElementById("content");
    var img = oDiv.getElementsByTagName("img");
    var aBtn = oDiv.getElementsByTagName('a');
    var speed = -1;
    var timer = null;
    content.innerHTML += content.innerHTML;
   content.style.width = img[0].offsetWidth * img.length + 'px';
    timer = setInterval(function(){
      content.style.left = content.offsetLeft + speed + 'px';
      if(content.offsetLeft < - content.offsetWidth / 2){
        clearInterval(timer);
        content.style.left = '0';
      }else if(content.offsetLeft > 0){
        clearInterval(timer);
        content.style.left = - content.offsetWidth / 2 + 'px';
      }
    },100);
    aBtn[0].onclick = function(){
      speed = -1;
    };
    aBtn[1].onclick = function(){
      speed = 1;
    };
    content.onmouseover = function(){
      clearInterval(timer);
    };
    content.onmouseout = function(){
      timer = setInterval(function(){
        content.style.left = content.offsetLeft + speed + 'px';
        if(content.offsetLeft < -content.offsetWidth / 2){
        clearInterval(timer);
          content.style.left = '0';
        }else if(content.offsetLeft > 0){
        clearInterval(timer);
          content.style.left = - content.offsetWidth / 2 + 'px';
        }
      },100);
    };
  };