const state = {
  //  11
  username: 'sss',
  user: '',
  status: '',
  code: '',
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  setting: {
    articlePlatform: []
  }
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  //   22
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {
  //   22
  updateUserName ({ commit, state, rootState, dispatch }) {
    dispatch('xxx', '')
  },
  xxx () {

  }
}

// 使用命名空间
export default {
  getters,
  state,
  mutations,
  actions
}
