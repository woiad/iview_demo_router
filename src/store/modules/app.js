import {appRouter} from '@/router/router'
const app = {
  state: {
    menuList: [],
    routers: [
      ...appRouter
    ]
  },
  mutations: {
    updateMenuList (state) {
      let menuList = []
      appRouter.forEach((item, index) => {
        menuList.push(item)
      })
      state.menuList = menuList
    }
  }
}
export default app
