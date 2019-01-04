// 路由匹配有顺序，如果有重复，自上而下，先匹配到先用
export default [
  {
    path: '/',
    redirect: '/taskpackagelist'
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home'),
    meta: { title: '自述文件' },
    children: [
      {
        path: '/taskpackagelist',
        component: () => import('../views/TaskpackageList'),
        meta: { title: '任务包列表' }
      },
      {
        path: '/taskpackagepartition',
        component: () => import('../views/TaskpackagePartition'),
        meta: { title: '任务包划分' }
      },
      {
        path: '/404',
        component: () => import('../views/404'),
        meta: { title: '404' }
      },
      {
        path: '/403',
        component: () => import('../views/403'),
        meta: { title: '403' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: { title: '登录' }
  },
  {
    path: '*',
    redirect: '/404'
  }

]
