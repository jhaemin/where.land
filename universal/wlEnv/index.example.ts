export const wlEnv = {
  port: {
    dev: {
      client: 0,
      authServer: 0,
    },
    prod: {
      client: 0,
      authServer: 0,
    },
  },
  auth: {
    jwt: {
      secretKey: '',
      accessTokenLifetime: '',
    },
    google: {
      clientID: '',
      clientSecret: '',
    },
  },
}
