import topSidebar from '@/components/topSidebar'

export const otherRouter = {
  path: '/',
  name: 'home',
  component: () => import('@/components/topSidebar')
}
export const appRouter = [
  {
    path: '/access',
    icon: 'key',
    name: 'access',
    title: '权限管理',
    component: topSidebar,
    children: [
      {path: 'index', title: '权利管理', name: 'access_index', component: () => import('@/components/access/access.vue')}
    ]
  },
  {
    path: '/access-test',
    icon: 'lock-combination',
    title: '权限测试页',
    name: 'access_test',
    component: topSidebar,
    children: [
      {path: 'index', title: '权限测试', name: 'access_test', access: 0, component: () => import('@/components/access/access-test.vue')}
    ]
  },
  {
    path: '/international',
    icon: 'earth',
    name: 'international',
    component: topSidebar,
    children: [
      {path: 'index', title: '多语言切换', name: 'international', component: () => import('@/components/international/international.vue')}
    ]
  },
  {
    path: '/component',
    icon: 'socail-buffer',
    title: '组件',
    component: topSidebar,
    children: [
      {
        path: 'text-editor',
        icon: 'compose',
        name: 'text-deitor',
        title: '富文本编辑器',
        component: () => import('@/components/my-components/text-editor/text-editor.vue')
      },
      {
        path: 'md-editor',
        icon: 'pound',
        name: 'md-editor',
        title: 'Markdown编辑器',
        component: () => import('@/components/my-components/markdown-editor/markdown-editor.vue')
      },
      {
        path: 'image-deitor',
        icon: 'crop',
        name: 'image-editor',
        title: '图片编辑器',
        component: () => import('@/components/my-components/image-editor/image-editor.vue')
      },
      {
        path: 'draggable-list',
        icon: 'arrow-move',
        name: 'draggable-list',
        title: '可拖拽列表',
        component: () => import('@/components/my-components/draggable-list/draggable-list.vue')
      },
      {
        path: 'aren-linkage',
        icon: 'ios-more',
        name: 'area-linkage',
        title: '城市级联',
        component: () => import('@/components/my-components/area-linkage/area-linkage.vue')
      },
      {
        path: 'file-upload',
        icon: 'android-upload',
        name: 'file-upload',
        title: '文件上传',
        component: () => import('@/components/my-components/file-upload/file-upload.vue')
      },
      {
        path: 'scroll-bar',
        icon: 'arrow-graph-up-right',
        name: 'scroll-bar',
        title: '滚动条',
        component: () => import('@/components/my-components/count-to/count-to.vue')
      },
      {
        path: 'split-pane-page',
        icon: 'ios-pause',
        name: 'split-pane-page',
        title: 'split-pane',
        component: () => import('@/components/my-components/split-pane/split-pane-page.vue')
      }
    ]
  },
  {
    path: './form',
    icon: 'android-checkbox',
    name: 'form',
    title: '表单编辑',
    component: topSidebar,
    children: [
      {path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/components/form/article-publish/article-publish.vue')},
      {path: 'workfow', title: '工作流', name: 'worlflow', icon: 'arrow-swap', component: () => import('@/components/form/work-flow/work-flow.vue')}
    ]
  },
  {
    path: '/tables',
    icon: 'ios-grid-view',
    name: 'dragable-table',
    title: 'dragable-table',
    component: topSidebar,
    children: [
      { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/components/tables/dragable-table.vue') }
    ]
  },
  {
    path: '/advanced-router',
    icon: 'ios-inifite,',
    name: 'advanced-router',
    title: '高级路由',
    component: topSidebar,
    children: [
      { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/components/advanced-router/mutative-router.vue') },
      { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/components/advanced-router/argument-page.vue') }
    ]
  },
  {
    path: '/error-page',
    icon: 'android-sad',
    name: 'errorpage',
    title: '错误页面',
    component: topSidebar,
    children: [
      {path: 'index', title: '错误页面', name: 'errorpage', component: () => import('@/components/error-page/error-page.vue')}
    ]
  }
]

// 上面定义的路由都要写在下面的routes里
export const routers = [
  otherRouter,
  ...appRouter
]
