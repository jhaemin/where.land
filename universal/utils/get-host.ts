import { wlEnv } from '../wlEnv'

export const getHost = (isDev: boolean, isAuthServer: boolean) => {
  if (isAuthServer) {
    if (isDev) {
      return `http://localhost:${wlEnv.port.dev.authServer}`
    } else {
      return `https://api.where.land`
    }
  } else {
    if (isDev) {
      return `http://localhost:${wlEnv.port.dev.client}`
    } else {
      return `https://where.land`
    }
  }
}
