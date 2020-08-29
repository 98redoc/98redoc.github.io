import Vue from 'vue'
import App from './App.vue'
import router from './router' 
Vue.config.productionTip = false

// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Vue.use(VueSidebarMenu)

import VueNavigationBar from "vue-navigation-bar"
import "vue-navigation-bar/dist/vue-navigation-bar.css"
Vue.component("vue-navigation-bar", VueNavigationBar)

import 'font-awesome/css/font-awesome.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
