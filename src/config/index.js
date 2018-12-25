export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com'
  : 'http://192.168.3.120:8000/v4'
// process.env.NODE_ENV 有两个值：production，development

export const cookieExpires = 1

// export default {
//   /**
//    * @description token在Cookie中存储的天数，默认1天
//    */
//   cookieExpires: 1,
//
//   baseUrl: {
//     // dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
//     dev: 'http://192.168.3.120:8000/v2/',
//     pro: 'https://produce.com'
//   }
// }
