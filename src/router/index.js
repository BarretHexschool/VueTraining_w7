import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'laddingPage',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'draw',
        component: () => import('../views/front/DrawView.vue')
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
        path: 'cartfinal/:id',
        component: () => import('../views/front/CartFinalView.vue')
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
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'laddingPage'
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      resolve({ top: 0, behavior: 'smooth' })
    })
    // ...
  }
})

export default router
