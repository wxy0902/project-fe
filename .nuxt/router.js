import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e40d2ef = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _27f3ab8d = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _a1ad5630 = () => interopDefault(import('../pages/editor/new.vue' /* webpackChunkName: "pages/editor/new" */))
const _7a51a3b2 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _6e8a8e40 = () => interopDefault(import('../pages/user/_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _f6cda050 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/login",
      component: _4e40d2ef,
      name: "login"
    }, {
      path: "/register",
      component: _27f3ab8d,
      name: "register"
    }, {
      path: "/editor/new",
      component: _a1ad5630,
      name: "editor-new"
    }, {
      path: "/article/:id?",
      component: _7a51a3b2,
      name: "article-id"
    }, {
      path: "/user/:id?",
      component: _6e8a8e40,
      name: "user-id"
    }, {
      path: "/",
      component: _f6cda050,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
