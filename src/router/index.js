import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import ProductsView from '../views/ProductsView.vue'
// import AdminView from '../views/AdminView.vue'
// import ContactView from '../views/ContactView.vue'

const routes = 
[
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '@/views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '@/views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import( '@/views/ProductView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '@/views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '@/views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
