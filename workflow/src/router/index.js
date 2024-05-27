import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Views Page
import Home from '../views/blog/Home.vue'
import Docs from '../views/documentation/Docs.vue'
import News from '../views/News/News.vue'
import WebMaster from '../views/internal/WebMaster.vue'
import Register from '../views/internal/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog/home',
      name: 'blog',
      component: Home
    },
    {
      path: '/documentation/Docs',
      name: 'documentation',
      component: Docs
    },
    {
      path: '/News/News',
      name: 'News',
      component: News
    },
    {
      path: '/internal/WebMaster',
      name: 'webmaster',
      component: WebMaster
    },
    {
      path: '/internal/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
