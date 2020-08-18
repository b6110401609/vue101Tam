import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Todo from '../views/Todo.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) =>{
  const publicPages = ['/login', '/register', '/todo']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if(authRequired && !loggedIn){
    return next('/login')
  }
  
  next()
})