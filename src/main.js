// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import App from './App'
import routes from './routes'
import 'element-ui/lib/theme-chalk/index.css'


// 不使用mock时可以关闭
import Mock from './mock/mock'
Mock.init();




/**
 * 新增 init 方法：
 * 1、初始化api的axio
 */



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)




const router = new VueRouter({
  routes
})

/**
 * 新增store控制
 */

/**
 * 新增router控制阀
 */

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  // components: { App },
  render: h => h(App)
  // template: '<App/>'
}).$mount('#app')

