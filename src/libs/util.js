let util = {}

util.showThisRouter = function (itAccess, currentAccess) {
  if (typeof itAccess === 'object' && Array.isArray(itAccess)) {
    return util.oneof(currentAccess, itAccess)
  } else {
    return itAccess === currentAccess
  }
}

util.getRouterObjByName = function (routers, name) {
  if (!name || !routers || !routers.length) {
    return null
  }
  let routerObj = null
  for (let item of routers) {
    if (item.anme === name) {
      return item
    }
    routerObj = util.getRouterObjByName(item.children, name)
    if (routerObj) {
      return routerObj
    }
  }
  return null
}

util.toDefaultPage = function (routers, name, router, next) {
  let length = routers.length
  let i = 0
  let notHandle = true
  console.log(1)
  while (i < length) {
    if (routers[i].name === name && routers[i].children && router[i].redirect === undefined) {
      router.replace({
        name: routers[i].children[0].name
      })
      notHandle = false
      next()
      break
    }
    i++
  }
  if (notHandle) {
    next()
  }
}
export default util
