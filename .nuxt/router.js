import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _319ea2e4 = () => interopDefault(import('..\\pages\\api.vue' /* webpackChunkName: "pages/api" */))
const _9cb7e95c = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _39876e20 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _c3b07150 = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _39941a2a = () => interopDefault(import('..\\pages\\users\\_id\\index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _29071be2 = () => interopDefault(import('..\\pages\\users\\_id\\edit.vue' /* webpackChunkName: "pages/users/_id/edit" */))
const _f8f7841c = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _6c3a311c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/api",
    component: _319ea2e4,
    name: "api"
  }, {
    path: "/users",
    component: _9cb7e95c,
    children: [{
      path: "",
      component: _39876e20,
      name: "users"
    }, {
      path: ":id",
      component: _c3b07150,
      children: [{
        path: "",
        component: _39941a2a,
        name: "users-id"
      }, {
        path: "edit",
        component: _29071be2,
        name: "users-id-edit"
      }]
    }]
  }, {
    path: "/blog/:slug?",
    component: _f8f7841c,
    name: "blog-slug"
  }, {
    path: "/",
    component: _6c3a311c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
