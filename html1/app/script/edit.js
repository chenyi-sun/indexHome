import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
require('./../css/edit.scss');

let edit = new Vue({
      el: '#edit',
      data: {
        bigSelects:'',
        smalltypes: '',
        bigselect: '',
        smallselect: '',
        title: '',
        text: '',
        content:{
            title: '',
            content1: '',
            content2:'',
            content3: '',
            content4: '',
            content5:'',
            content6: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            img5: '',
            img6: '',
            bigtype: '',
            smalltype_value: '',
        },
      },
      mounted(){
           var self = this;
            axios.get('http://www.mytest.com/index/index/edit',{
            // axios.get('http://test1.com/index/index/edit',{
        //    axios.get('./edit',{
             })
             .then(function(item){
                  var data = item.data;
                  self.setAllselect(data);
            });
      },
      methods:{
          submit(){
              var self = this;
              console.log('title:'+self.title);
              console.log('text:'+self.text);
              console.log('bigselect:'+self.bigselect);
              console.log('smalltypes:'+self.smallselect);
            //   axios.post('http://www.mytest.com/index/index/edit',qs.stringify({
            //   axios.post('http://test1.com/index/index/edit',qs.stringify({
               
             axios.post('./edit',qs.stringify(self.content)) 
                .then(function(res){
                console.log(res);
                })
                .catch(function(err){
                console.log(err);
                });
          },
          changebingselect(item){
             var self = this;
             for(let dom in self.smalltypes){
                      if(self.smalltypes[dom].bigtype == item){
                          self.smallselect = self.smalltypes[0].value;
                      }
              }
          },
          setAllselect(data){
                  var self = this;
                  self.bigSelects = data.bigtype;
                  self.smalltypes = data.smalltype;
                  self.bigselect = self.bigSelects[0].bigtype;
                  console.log(self.smalltypes);
                  for(let dom in self.smalltypes){
                      if(self.smalltypes[dom].bigtype == self.bigselect){
                          self.smallselect = self.smalltypes[0].value;
                         console.log(self.smalltypes[dom]);
                      }
                  }
          }
      }
});
