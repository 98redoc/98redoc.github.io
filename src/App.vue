<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <vue-navigation-bar :options="navbarOptions" />
    <router-view class="main"/>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
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
            text: "BLOG",
            path: { name: "Blog"},
            // iconLeft: '<i class="fa fa-home"></i>',
          },
          {
            type: "link",
            text: "ABOUT",
            path: { name: "About"}, 
            // iconLeft: '<i class="fa fa-address-card"></i>',
          },
        ],
        menuOptionsRight: [
          {
            type: "button",
            text: "Login",
            path: { name: "login" },
            iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
          }
        ] 
      }
    }  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 200px;
  position: relative;
}

@media(max-width:992px) {
    #app {
      margin: 0 10px;   
    }
}

.main {
  position: relative;
  margin: 0 4rem;
}
@media(max-width:992px) {
  .main {
    margin: 0 1rem;
  }
}
</style>
