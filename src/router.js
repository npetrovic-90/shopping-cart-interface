
import { createWebHistory, createRouter } from 'vue-router'
import Products from './components/Products.vue'
import Checkout from './components/Checkout.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    component: Products
  },
  {
    path: '/checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
