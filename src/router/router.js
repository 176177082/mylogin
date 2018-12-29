import Home from '@/views/Home.vue'
import LayOut from '../views/layout/Layout'
// 路由匹配有顺序，如果有重复，自上而下，先匹配到先用
export default [
  {
    path: '/',
    // 别名，
    alias: '/home_page',
    name: 'home',
    component: Home,
    // 路由函数模式传参
    props: route => ({
        food: route.query.food
      }
    )
    // 路由独享
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') alert('这是从about来的')
    //   else alert('这不是从about来的')
  },
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/taskpackage',
    component: LayOut,
    // redirect: '/example/table',
    name: 'Taskpackage',
    meta: { title: 'Taskpackage', icon: 'Taskpackage' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('../views/table/Table'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('../views/tree/Tree'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  }
  // {
  //   path: '/taskpackage',
  //   name: 'taskpackage',
  //   component: () => import('../views/taskpackage')
  // }
]
