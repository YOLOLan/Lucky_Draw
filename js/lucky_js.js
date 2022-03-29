var i = 1;
function go(){
//生成1~14之间随机整数
    var num = parseInt(Math.random()*14+1)+42;    //42目的绕三圈
    //开启计时器
    var timer = setInterval(function(){
        num--;
        if(num==0){  //停止计时器
            clearInterval(timer);
        }
        //去除原有样式
        var items = document.getElementsByClassName('item');
        for(var item of items){
            item.classList.remove("current");
        }    
        //设置选中项样式
        var item = document.getElementById('item'+i);
        item.classList.add('current');
        i++;
        if(i>14){
            i=1;
        }
    },50);  //每100毫秒刷新计时一次
}