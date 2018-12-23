export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com'
  : 'http://192.168.3.120:8000'
// process.env.NODE_ENV 有两个值：production，development
