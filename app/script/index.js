require('./../css/main.scss');
require('./all.js');
require('./img');
import Vue from 'vue';
import axios from 'axios'
import Apps from './../components/App.vue'
import Login from './../components/Login.vue'

let app = new Vue({
        el: '#appall',
        data: {
           sss: 'ssss',
           iChange: 0,
           length: document.getElementsByClassName('div').length,
           height: document.getElementsByTagName('body')[0].clientHeight,
           app: document.getElementById('app'),
           isShowClick: true,//不显示
           sliderFlag: 0,
           showlog: false,
        },
        components: {
            'Apps': Apps,
            'Login': Login,
        },
        methods: {
          setChange(item){
            let sef = this;
            let flag = 0;
            let app = document.getElementById('app');
              if(item == 1){
                sef.iChange = sef.iChange-1;
              }
              else if(item == 2 ){
                 sef.iChange = sef.iChange+1;
              }
              if(sef.iChange == sef.length){
                 sef.iChange = sef.iChange -1;
                 return false;
              }
              else if(sef.iChange == -1){
                sef.iChange = 0;
                return false;
              }
              else if(sef.iChange > 0){
                sef.isShowClick = false; 
              }
              else if(sef.iChange == 0){
                sef.isShowClick = true; 
              }
            app.style.top = -sef.height*sef.iChange + 'px';
          },
          changeshowlog(){
            this.showlog = !this.showlog;
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
              app.style.top = -i*changWidth + 'px';
              sef.iChange = Math.round((i*changWidth)/length);
              sef.isShowClickFirst();
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
             
            }
          },
          isShowClickFirst(){
              console.log('sss');
            if(this.iChange == 0){
              this.isShowClick = true;
            }
            else{
              this.isShowClick = false;
            }
          },
        },
        mounted(){
            this.setHeight();
            this.setChange();
            this.linster();
            // this.setMenu();
            this.resized();
        }
    });
