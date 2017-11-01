define(['ad','jquery'],function(ad,$){
    var add = function(x,y){
        // console.log(ad.ss());
        return x+y;
    }
    var loading = function(){
        document.querySelector('#app').innerHTML = MyApp.templates.Loading();
        var allDoms = [];
        /**显示加载时间 */
        var numInt = 1;
        function setTime(num){
            if(num<=100){
                document.getElementsByClassName('loading_box')[0].getElementsByClassName('text')[0].innerHTML=num+'%';
                numInt = numInt + 1;
                setTimeout(setTime,100,numInt);
            }
            else{
                //**等100% 以后执行的行为 */
               document.querySelector('#app').innerHTML = ''; 
            }
        }
        setTime(numInt)
        // setInterval(function(){console.log('dddd')},120);
    }
    var menu = function(){
        console.log('menu');
        console.log($);
    }
    return {
        add: add, //相加函数
        ad: ad,
        loading: loading,
        menu: menu
    }
});