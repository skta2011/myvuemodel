// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import App from './App'
import routes from './routes'
import Mock from './mock/mock'
import 'element-ui/lib/theme-chalk/index.css'

Mock.init();

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  // components: { App },
  render: h => h(App)
  // template: '<App/>'
}).$mount('#app')

