// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import Sidebar from '@/components/Sidebar'

Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.prototype.apiUrl = 'http://www.backstage.com/api/'

Vue.component('Sidebar', Sidebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
