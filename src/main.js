// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../theme/index.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import MenuBar from '@/components/MenuBar'

Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.prototype.apiUrl = 'http://www.backstage.com/'

Vue.component('MenuBar', MenuBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
