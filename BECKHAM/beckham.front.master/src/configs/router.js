import { createRouter, createWebHistory, useRouter } from 'vue-router'
import store from '@/configs/store'

//define a routes
const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    meta: {
      is_ready: true,
      require_auth: false,
      is_auth: false,
      title: 'Official BECKS Coin',
      description: ''
    },
    component: () => import('@/views/Home/IndexV2.vue')
  },
  {
    path: '/v1',
    alias: '/homev1',
    name: 'home.v1',
    meta: {
      is_ready: true,
      require_auth: false,
      is_auth: false,
      title: 'Official BECKS Coin',
      description: ''
    },
    component: () => import('@/views/Home/Index.vue')
  },
  {
    path: '/v2',
    alias: '/homev2',
    name: 'home.v2',
    meta: {
      is_ready: true,
      require_auth: false,
      is_auth: false,
      title: 'Official BECKS Coin',
      description: ''
    },
    component: () => import('@/views/Home/IndexV2.vue')
  },
  {
    path: '/v3',
    alias: '/homev3',
    name: 'home.v3',
    meta: {
      is_ready: true,
      require_auth: false,
      is_auth: false,
      title: 'Official BECKS Coin',
      description: ''
    },
    component: () => import('@/views/Home/IndexV3.vue')
  },
  {
    path: '/v4',
    alias: '/homev4',
    name: 'home.v4',
    meta: {
      is_ready: true,
      require_auth: false,
      is_auth: false,
      title: 'Official BECKS Coin',
      description: ''
    },
    component: () => import('@/views/Home/IndexV4.vue')
  },
  {
    path: '/404',
    alias: '/pagenotfound',
    name: '404',
    meta: {
      is_ready: true,
      require_auth: false,
      is_auth: false,
      title: 'Official BECKS Coin | 404',
      description:
        'Halaman yang Anda cari tidak ditemukan. Mohon periksa kembali alamat URL atau kembali ke halaman utama.'
    },
    component: () => import('@/views/Page/404.vue')
  }
]

//create router
const router = createRouter({
  history: createWebHistory(),
  useroute: useRouter(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.is_ready)) {
    if (to.matched.some((record) => record.meta.require_auth)) {
      if (store.getters.authenticated) {
        next()
        return
      }
      next('/login')
      return
    } else if (to.matched.some((record) => record.meta.is_auth)) {
      if (store.getters.authenticated) {
        next('/')
        return
      }
      next()
      return
    } else {
      next()
      return
    }
  } else {
    next('/404')
  }
})

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    if (to.meta && to.meta.description) {
      metaDescription.setAttribute('content', to.meta.description)
    } else {
      metaDescription.setAttribute(
        'content',
        'BECKHAM'
      )
    }
  } else {
    const description = document.createElement('meta')
    description.name = 'description'
    description.content =
      to.meta.description || 'BECKHAM'
    document.head.appendChild(description)
  }
})

export default router

