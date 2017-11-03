// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../theme/index.css'

import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import NavMenu from '@/components/NavMenu'
import Tabs from '@/components/Tabs'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.apiUrl = 'http://www.backstage.com/api/'

Vue.component('NavMenu', NavMenu)
Vue.component('Tabs', Tabs)

const store = new Vuex.Store({
  state: {
    isCollapse: true,
    apiUrl: 'http://www.backstage.com/api/'
  },
  mutations: {
    // 切换导航菜单栏缩放
    toggleMenu (state) {
      state.isCollapse = !state.isCollapse
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
