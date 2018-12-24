import Cookies from 'js-cookie'
import { cookieExpires } from '../config'

export const TOKEN_KEY = 'token'

export const setCookieToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getCookieToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) {
    return token
  } else {
    return false
  }
}
