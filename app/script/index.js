require('./../css/main.scss');
require('./all.js');
require('./img');
import Vue from 'vue';
import axios from 'axios'
import Apps from './../components/App.vue'

// function change(paremary){
//     this.name = "ss";
//     this.alert = paremary;
// }
// axios.get('http://apiqinbayou.ztxywy.net/app/service/category/index?openid=ocbOUs4UnYI7uQ4TEOG8Sr3MdsQc')
// .then(function(item){
//     console.log(item.data);
//     let ss = item.data;
//     let app = new Vue({
//         el: '#app',
//         data: {
//             message: item.data
//         }
//     })
// });
// let ss = {
//     ss:'sss'
// }
// const longChance = ['sss', 'ksksksk'];
// let alls = longChance.map((item) =>  new change(item));
// console.log( Object.assign(...alls));

    let app = new Vue({
        el: '#appall',
        data: {
           sss: 'ssss',
           iChange: 0,
           length: document.getElementsByClassName('div').length,
           height: document.getElementsByTagName('body')[0].clientHeight,
           app: document.getElementById('app'),
           where: '下',
           sliderFlag: 0,
        },
        components: {
            'Apps': Apps
        },
        methods: {
          setChange(){
            let sef = this;
            let click = document.getElementsByClassName('click');
            let app = document.getElementById('app');
            let flag = 0;

            click[0].onclick = function() {
              if(sef.iChange == sef.length - 1){
                 flag = 1;
                 sef.where = '上'
              }
              if(sef.iChange == 0){
                flag = 0;
                sef.where = '下'
              }

              if (flag == 0){
                  sef.iChange = sef.iChange+1;
              }
              else if(flag == 1){
                  sef.iChange = sef.iChange-1;
              }
              app.style.top = -sef.height*sef.iChange + 'px';
            }
          },
          linster(){
            let sef = this;
            let app = document.getElementById('app');
            let length = sef.height;
            let changWidth = 20;
            let i = sef.iChange * length/changWidth;
            if(window.addEventListener){
                window.addEventListener('DOMMouseScroll', wheel, false);
                window.onmousewheel = wheel;
            }
            function wheel(event){
              i = event.wheelDelta>0?i-length/changWidth:i+length/changWidth;

              if(i<0){
                i = 0;
              }
              if(i >= ((sef.length-1)*length/changWidth)){
                  i = ((sef.length-1)*length/changWidth);
              }

              if((sef.iChange+1) == parseInt(i/(length/changWidth))){
                if(event.wheelDelta<0){
                  sef.iChange = sef.iChange + 1;
                }
              }
              app.style.top = -i*changWidth + 'px';
            }
          },
          setHeight(){
              let app = document.getElementById('app');
              this.height = document.getElementsByTagName('body')[0].clientHeight;
              let divs = document.getElementsByClassName('div');
              let sef = this;
              for(let item of divs){
                item.style.height = sef.height+'px';
              }
              app.style.top = -this.iChange*sef.height + 'px';
          },
          resized(){
            var sef = this;
            window.onresize  = function(){
              sef.setHeight();
              sef.linster();
              sef.setMenu(false);
            }
          },
          setMenu(a){
            let app = document.getElementById('app');
            let sef = this;
            let slider = document.getElementsByClassName('slider')[0];
            this.sliderFlag = this.sliderFlag==0?1:0;
            if(!a){
              this.sliderFlag = this.sliderFlag==0?1:0;
            }

            slider.style.top = this.sliderFlag==1?0:(this.height-300) + "px";

            var change = this.sliderFlag==1?(-this.iChange*this.height-300):(-this.iChange*this.height);
            setTimeout(setTop,300);
            setTimeout(setMenuTop,500);
            function setTop(){
              app.style.top = change + 'px';
              slider.style.top = sef.sliderFlag==1?0:sef.height + "px";
            }
            function setMenuTop(){
              console.log('ssss');

            }
          }
        },
        mounted(){
            this.setHeight();
            this.setChange();
            this.linster();
            // this.setMenu();
            this.resized();
        }
    });
