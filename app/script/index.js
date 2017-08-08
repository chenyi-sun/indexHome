require('./../css/main.scss');
require('./all.js');
require('./img');
require('./../css/login.scss');
require('./canvas3');
import Vue from 'vue';
import Loading from './../components/Loading.vue';
import axios from 'axios'
import Apps from './../components/App.vue'
import  Velocity from 'velocity-animate'
import qs from 'qs';

// import Login from './../components/Login.vue'
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
           loginShow:{
             showif: false,
             flagSee: 1,
           },
           create:{
             username: '',
             email: '',
             password: '',
             repassword: '',
             mobile: '',
           },
           allarticle:{
             getarticle: 'sssss',
           },
           signin:{
             username: '',
             password: '',
             isshake: false,
           },
           loadingisShow: false,
        },
        components: {
            'Apps': Apps,
            'Loading':Loading,
            // 'Login': Login,
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
            this.loginShow.showif = !this.loginShow.showif;
            this.signin.isshake = false;
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
              sef.drawCanvas();
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
            if(this.iChange == 0){
              this.isShowClick = true;
            }
            else{
              this.isShowClick = false;
            }
          },
          close(){
            this.loginShow.showif = false;
          },
          changeSignPage(item){
            this.loginShow.flagSee = item;
          },
          drawCanvas(){
              class Point {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.r = 1;
                    this._mx = Math.random() ;
                    this._my = Math.random() ;
                }
                drawCircle(ctx) {
                      ctx.beginPath();  
                      ctx.arc(this.x, this.y, this.r, 0, 360);
                      ctx.closePath();
                      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                      ctx.fill();
                    }
                 drawLine(ctx) {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x+40,this.y+40);
                    ctx.closePath();
                    ctx.strokeStyle = 'rgba(102 ,139 ,139 ,0.3)';
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x+40,this.y);
                    ctx.closePath();
                    ctx.strokeStyle = 'rgba(102 ,139 ,139 ,0.3)';
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x,this.y+40);
                    ctx.closePath();
                    ctx.strokeStyle = 'rgba(102 ,139 ,139 ,0.3)';
                    ctx.stroke();
                 }
                };
              window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
              let canvas = document.getElementById('canvas');
              let ctx = canvas.getContext('2d');
              let w = canvas.width = canvas.offsetWidth;
              let h = canvas.height = canvas.offsetHeight;
              let points = [];
              let length = 40;
              var widthNum = Math.ceil(w/length);
              var heightNum = Math.ceil(h/length);
              let num = widthNum * heightNum;
              var l = 0,lis = 0;
              for (var i = 0; i < num; i++) {
                if(i % widthNum == 0){
                   l = l+1;
                   lis = 0;
                 }
                lis = lis + 1;  
                points.push(new Point(-2+(lis-1)*length,-1+(l-1)*length));
                 
              }
              for (let i = 0; i < points.length; i++) {
                 
                  points[i].drawCircle(ctx);
                  points[i].drawLine(ctx);
              }
           },
           creatAccount(){
             var self = this;
            for(var item in self.create){
              if(self.create[item]==''){
                setTimeout(function() {
                  self.signin.isshake = true;
                }, 1);
                self.signin.isshake = false;
              }
            }

            //  if(self.create.username==''){
            //    console.log('请填入姓名');
              
            //  }
             self.signin.isshake = false;  
             return false;
             axios.post('http://test1.com/index/index/addaccount',qs.stringify({
               username: self.create.username,
               password: self.create.password,
               mobile: self.create.mobile,
               email: self.create.email,
             }))
              .then(function(item){
                console.log(item);
                //注册账户成功以后把数据清空
                if(item.data.code == 200){
                  self.create.username = '';
                  self.create.password = '';
                  self.create.mobile = '';
                  self.create.email = '';
                  self.create.repassword = '';
                  self.loginShow.showif = false;
                }
                  console.log(item);
              });
              
           },
          setArticles(){
             var self = this;
             axios.get('http://test1.com/index/index/getarticle',{
             }).then(function(res){
              self.allarticle.getarticle = res.data;
              console.log(self.allarticle.getarticle);
             });
          },
          signIn(){
            var self = this;
            axios.get('http://test1.com/index/index/signin',{
              params:{
                 username: self.signin.username,
                 password: self.signin.password,
              }
            }).then(function(item){
              if(item.data.code==200){
                 console.log(item);
                 console.log('success');
                 self.loginShow.showif = false;
              }
              else if(item.data.code==500){
                self.signin.isshake = true;
                console.log('faile');
              }
            });
            self.signin.isshake = false;
            //用户登录
          }
      },
        mounted(){
           var self = this;
            this.setHeight();
            this.setChange();
            this.linster();
            this.resized();
            this.drawCanvas();
            this.setArticles();
        }
    });
