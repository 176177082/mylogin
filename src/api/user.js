import request from '../libs/axios'

export function login (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/',
    method: 'post',
    data
  })
}
