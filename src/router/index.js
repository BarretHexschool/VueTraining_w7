import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/PrductView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminLayout.vue'),
    children: [
      // {
      //   path: '',
      //   name: 'Home',
      //   component: () => import('../views/front/HomeView.vue')
      // },
      {
        path: 'Orders',
        component: () => import('../views/admin/OrdersView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/admin/ProductView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/admin/ProductsView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
