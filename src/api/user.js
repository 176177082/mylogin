import { axiosInstance } from '../libs/axios'
//
// export function axiosLogin ({ username, password }) {
//   const data = {
//     username,
//     password
//   }
//   return axiosInstance({
//     url: '/login/',
//     method: 'post',
//     data
//   })
// }

export const axiosLogin = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axiosInstance({
    url: '/login/',
    data,
    method: 'post'
  })
}

export const axiosGetUserInfo = () => {
  return axiosInstance({
    url: '/user/',
    method: 'get'
  })
}
