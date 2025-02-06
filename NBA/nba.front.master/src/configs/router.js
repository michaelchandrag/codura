import { createRouter, createWebHistory, useRouter } from 'vue-router'
import { company } from '@/models'
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
      title: company.alias,
      description: company.description,
    },
    component: () => import('@/views/Home/Index.vue')
  },
  {
    path: '/404',
    alias: '/pagenotfound',
    name: '404',
    meta: {
      is_ready: true,
      require_auth: false,
      is_auth: false,
      title: `${company.alias} | 404`,
      description: `Sorry, we couldn't find the page you were looking for. The page may no longer be available or may be under construction.`
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
        company.alias
      )
    }
  } else {
    const description = document.createElement('meta')
    description.name = 'description'
    description.content =
      to.meta.description || company.description
    document.head.appendChild(description)
  }
})

export default router

