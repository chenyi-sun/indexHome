define(['ad'],function(ad){
    var add = function(x,y){
        console.log(ad.ss());
        return x+y;
    }

    return {
        add: add, //相加函数
        ad: ad
    }
});