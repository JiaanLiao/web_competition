var date = new Date();
var Realtime = document.getElementById("Real_time");
//调用函数
timemove();

//定义函数
function timemove() {
    //定义个个时间变量
    var date = new Date();
    var year = date.getFullYear();
    var mth = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var week = date.getDay();
    
    //定义拼接变量,变量调用转换两位数函数
    var time = "欢迎您"+" "+ year + "年" + fn(mth) + "月" + fn(d) + "日" + fn(h) + ":" + fn(m) +  ":" + fn(s);
    
    //定义函数，将一位数"1"转为两位数"01"
    function fn(str) {
        str < 10 ? str = "0" + str : str;
        return str;
        
    }
    //定义定时器，调用函数，每秒刷新
    setInterval(timemove, 1000);
    //拼接变量显示在页面
    Realtime.innerHTML = time;
}