import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { getCookieToken } from './libs/cookie'

// import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 使用钩子函数对路由进行权限跳转

router.beforeEach((to, from, next) => {
  const token = getCookieToken()
  if (!token && to.name !== 'login') {
    // 未登录且要跳转的页面不是登录页
    next({
      name: 'login' // 跳转到登录页
    })
  } else if (!token && to.name === 'login') {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === 'login') {
    // 已登录且要跳转的页面是登录页
    next({
      name: 'home' // 跳转到homeName页
    })
  } else {
    console.log('未写权限判断的路由')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
