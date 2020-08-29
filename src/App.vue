<template>
  <div id="app">
    <sidebar-menu :menu="sidebar.menu" :width="'200px'" :collapsed="sidebar.collapsed">
      <div slot="header">
        <div class="header__avatar">
            <img class="header__avatar-img" src="./assets/avatar.png" alt="98redoc">
        </div>
      </div>
      <i class="fa fa-chevron-right" slot="dropdown-icon"></i>
      <i class="fa fa-arrows-h" slot="toggle-icon"></i>
    </sidebar-menu>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view/>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  components: {
    SidebarMenu
  },
  created() {
    window.addEventListener('resize', () => {
        if ( window.innerWidth <= 960 ) {
            this.sidebar.collapsed = true
        } else if ( window.innerWidth > 960) {
            this.sidebar.collapsed = false
        }
    });
  },
  data() {
    return {
      sidebar: {
        collapsed: window.innerWidth <= 960 ? true : false,
        menu: [
          {
              href: {
                name: 'Home'
              },
              title: 'Home',
              icon: 'fa fa-home'
          },
          {
              href: {
                name: 'About'
              },
              title: 'About',
              icon: 'fa fa-info  '
          },
        ],
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.v-sidebar-menu .vsm--header {
  text-align: center;
}

.header__avatar {
    margin: 1rem 0 1rem 0;
    display: flex;
    justify-content: center;
}

.header__avatar-img {
    width: 80%;
}
</style>
