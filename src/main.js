import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  watch: { // Ref: https://dev.to/webhookrelay/a-simple-way-to-keep-your-vue-page-title-in-sync-with-the-router-ec0
    '$route':{
      handler: (to) => {
        document.title = to.meta.title || "98redoC's Blogs"
      },
        immediate: true
    }
  },
}).$mount('#app')
