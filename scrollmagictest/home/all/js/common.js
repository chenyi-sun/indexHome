define(['ad'],function(ad){
    var add = function(x,y){
        console.log(ad.ss());
        return x+y;
    }
    var loading = function(){
        document.querySelector('#app').innerHTML = MyApp.templates.Loading();
        var numInt = 1;
        function setTime(num){
            if(num<=100){
                document.getElementsByClassName('loading_box')[0].getElementsByClassName('text')[0].innerHTML=num+'%';
                numInt = numInt + 1;
                setTimeout(setTime,100,numInt);
            }
        }
        
        setTime(numInt)
        // setInterval(function(){console.log('dddd')},120);
    }
    return {
        add: add, //相加函数
        ad: ad,
        loading: loading
    }
});