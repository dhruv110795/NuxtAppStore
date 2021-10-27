import { wrapFunctional } from './utils'

export { default as DisplayList } from '../..\\components\\displayList.vue'
export { default as UserList } from '../..\\components\\userList.vue'

export const LazyDisplayList = import('../..\\components\\displayList.vue' /* webpackChunkName: "components/display-list" */).then(c => wrapFunctional(c.default || c))
export const LazyUserList = import('../..\\components\\userList.vue' /* webpackChunkName: "components/user-list" */).then(c => wrapFunctional(c.default || c))
