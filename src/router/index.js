import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo'
import VuePageTransition from 'vue-page-transition'

Vue.use(VueRouter)

Vue.use(VuePageTransition)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/todo/:id',
    component: Todo,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
