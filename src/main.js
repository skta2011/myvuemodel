// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

var data2 = { 
  a: 1,
  msg:'my msg'
}
var data = { a: 1 }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:data2,
  router,
  components: { App },
  template: '<App/>'
})



let myNum = 1;
// 直接创建一个实例
var vm = new Vue({
  data: data,
  computed:{
    aPlus:{
      get: function(){
        return this.a + 1; 
      },
      set: function(v){
        this.a = v;
      }
    }
  },
  methods:{
    plusA: function(v){
      this.a = this.a + v;
    }
  },
  watch:{
    'a': function(val, oldVar){
      console.log('new：' + val + ' old:' + oldVar); 
    }
  }
})

console.log(myNum++ + ".---->" + vm.aPlus);
vm.aPlus = 10;
vm.plusA(100);

console.log(vm.a) // -> 1
console.log(vm.$data === data) // -> true
console.log(vm.data === data)
console.log(vm.a)

let dataTemp = {
  msg:'dddddd'
}

let dataOut = {dataTemp};

console.log(JSON.stringify(dataOut))
