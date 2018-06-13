import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import topSidebar from '@/components/topSidebar'
import Util from '../libs/util'
import {routers, appRouter, otherRouter} from './router'

Vue.use(Router)
const RouterConfig = {
  routes: routers
}
export const router = new Router({
  routes: routers
})
let isIndex = false
router.beforeEach((to, from, next) => {
  if (!isIndex) {
    if (to.path !== '/') {
      isIndex = true
      return next({replace: true, name: 'home'})
    } else {
      if (to.path === '/') {
        isIndex = true
        return next()
      }
    }
  }
  next()
})
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'topSidebar',
//       component: topSidebar,
//     }
//   ]
// })
