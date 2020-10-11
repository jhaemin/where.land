import { wlEnv } from '@/../universal/wlEnv'
import jwt from 'jsonwebtoken'
import { AuthData } from '../server/api/auth/types'

export const signAccessToken = (authData: AuthData) =>
  jwt.sign(authData, wlEnv.auth.jwt.secretKey, {
    expiresIn: wlEnv.auth.jwt.accessTokenLifetime,
  })

export const signRefreshToken = async (authData: AuthData) => {
  const refreshToken = jwt.sign(authData, wlEnv.auth.jwt.secretKey)

  // await prisma.user.update({
  //   data: {
  //     refreshToken,
  //   },
  //   where: {
  //     id: authData.userID,
  //   },
  // })

  return refreshToken
}

export const verifyToken = (token: string) =>
  jwt.verify(token, wlEnv.auth.jwt.secretKey) as AuthData
