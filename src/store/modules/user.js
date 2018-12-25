import { axiosLogin, axiosGetUserInfo } from '../../api/user'
import { setCookieToken } from '../../libs/cookie'

const state = {
  //  11
  username: '',
  token: '',
  roles: []
}

const mutations = {
  //  修改vuex中存储的唯一方法
  SET_TOKEN: (state, token) => {
    state.token = token
    setCookieToken(token)
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  //  当同时要修改多个值时，使用actions
  vuexLoginByUsername ({ commit }, loginForm) {
    const username = loginForm.username.trim()
    const password = loginForm.password
    return new Promise((resolve, reject) => {
      axiosLogin({
        username,
        password
      }).then(res => {
        commit('SET_TOKEN', res.data.token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  vuexGetUserInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      axiosGetUserInfo().then(response => {
        console.log(response)
        const data = response.data
        const roles = []
        if (data[0].isadmin === true) {
          roles.push('admin')
        } else {
          roles.push('mapper')
        }
        commit('SET_ROLES', roles)
        // 现在返回值中没有username
        commit('SET_USERNAME', data.username)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

// 使用命名空间
export default {
  state,
  mutations,
  actions
}
