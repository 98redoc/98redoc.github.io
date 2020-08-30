<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <vue-navigation-bar :options="this.$store.state.navbarOptions"/>
    <router-view class="main"/>
  </div>
</template>

<script>
export default {
  components: {
  },
  methods: {
    disableLoginButton() {
      console.log("Hello")
      console.log(this.navbarOptions.menuOptionsRight)
    }
  },
  watch: {
    $route (to, from){
      if (to.name == "Login") {
        this.$store.commit('visitLoginPage')
      }
      if (from.name=="Login") {
        this.$store.commit('leaveLoginPage')
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 100px;
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
