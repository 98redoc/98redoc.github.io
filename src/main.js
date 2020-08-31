import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router' 
import createPersistedState from "vuex-persistedstate";
Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    atLoginPage: false,
    user: null,
    navbarOptions: {
      elementId: "main-navbar",
      isUsingVueRouter: true,
      mobileBreakpoint: 992,
      brandImagePath: "./",
      brandImage: require("./assets/avatar_98redoc.png"),
      brandImageAltText: "98redoc",
      collapseButtonOpenColor: "#661c23",
      collapseButtonCloseColor: "#661c23",
      showBrandImageInMobilePopup: true,
      ariaLabelMainNav: "Main Navigation",
      tooltipAnimationType: "shift-away",
      menuOptionsLeft: [
        {
          type: "link",
          text: "TENSOR BLOG",
          path: { name: "Blog"},
          // iconLeft: '<i class="fa fa-home"></i>',
        },
        {
          type: "link",
          text: "ABOUT ME",
          path: { name: "About"}, 
          // iconLeft: '<i class="fa fa-address-card"></i>',
        },
      ],
      menuOptionsRight: [
        {
          type: "button",
          text: "Login",
          path: { name: "Login" },
          iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
        }
      ] 
    },
  },
  mutations: {
    updateMenuOptionsRight(state, newMenuOptionsRight) {
      state.navbarOptions.menuOptionsRight = newMenuOptionsRight
    },
    visitLoginPage() {
      this.commit('updateMenuOptionsRight', null)
    },
    leaveLoginPage() {
      this.commit('updateMenuOptionsRight', [{
          type: "button",
          text: "Login",
          path: { name: "Login" },
          iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
      }]) 
    },
    loggedIn() {
      this.commit('updateMenuOptionsRight', [{
        type: "link",
        text: this.state.user.username,
        iconRight: '<i class="fa fa-user fa-2x"></i>',
        subMenuOptions: [
          {
            type: "link",
            text: "Write Blog",
            path: { name: "BlogWriter" },
          },
          {
            type: "hr"
          },
          {
            type: "link",
            text: "Logout",
            path: { name: "Logout"}
          }
        ]
      }])
    },
    updateUser(state, user) {
      state.user = user
    },
    clearState() {
      this.state.user = null
      this.commit('leaveLoginPage')
    }
  }
})

// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Vue.use(VueSidebarMenu)

import VueNavigationBar from "vue-navigation-bar"
import "vue-navigation-bar/dist/vue-navigation-bar.css"
Vue.component("vue-navigation-bar", VueNavigationBar)

import 'font-awesome/css/font-awesome.css'

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
