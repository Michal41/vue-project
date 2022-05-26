import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView'
import SignInView from '../views/SignInView'
import ValidateTokenView from '../views/ValidateTokenView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-in',
    name: 'sginIn',
    component: SignInView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/validate-token/:userId/:token',
    name: 'validateToken',
    component: ValidateTokenView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
