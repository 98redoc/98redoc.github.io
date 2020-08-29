import Vue from 'vue'
import App from './App.vue'
import router from './router' 
Vue.config.productionTip = false

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

import 'font-awesome/css/font-awesome.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
