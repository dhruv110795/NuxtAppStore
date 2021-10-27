import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  DisplayList: () => import('../..\\components\\displayList.vue' /* webpackChunkName: "components/display-list" */).then(c => wrapFunctional(c.default || c)),
  UserList: () => import('../..\\components\\userList.vue' /* webpackChunkName: "components/user-list" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
