console.log('ask me to change');
require('./../css/text.scss');
//http://sandbox.runjs.cn/show/3d6krhzb#

let trigle = document.getElementById('menu');
let title = document.getElementById('title');
var changtitle = 0;
trigle.onmouseover=function(){
   trigle.setAttribute('class','animated wobble menu ');
};

trigle.onmouseout = function(){
   trigle.setAttribute('class','menu');
 
}
trigle.onclick = function(){
    if(changtitle == 0){
        changtitle = 1;
        title.setAttribute('class', 'article article-change');
    }
    else if(changtitle == 1){
        changtitle = 0;
        title.setAttribute('class', 'article');
    }
    
}