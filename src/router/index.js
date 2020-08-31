import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import BlogWriter from '../views/BlogWriter.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*', 
    redirect: '/'
  },
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/writer',
    name: 'BlogWriter',
    component: BlogWriter
  }
]

const router = new VueRouter({
  mode: 'hash', // 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
  