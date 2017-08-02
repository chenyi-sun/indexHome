console.log('ask me to change');
import Vue from 'vue';
import axios from 'axios';
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
      },
      mounted(){
           var self = this;
           axios.get('http://www.mytest.com/index/index/edit',{
             
             })
              .then(function(item){
                  var data = item.data;
                  self.bigSelects = data.bigtype;
                  self.smalltypes = data.smalltype;
                  self.bigselect = self.bigSelects[0].bigtype;
                   console.log(self.smalltypes);
                  for(let dom in self.smalltypes){
                      if(self.smalltypes[dom].bigtype == self.bigselect){
                          self.smallselect = self.smalltypes[0].type;
                         console.log(self.smalltypes[dom]);
                      }
                  }
            });
      },
      methods:{
          submit(){
              var self = this;
              console.log('title:'+self.title);
              console.log('text:'+self.text);
              console.log('bigselect:'+self.bigselect);
              console.log('smalltypes:'+self.smallselect);
          }
      }
});
