import { wlEnv } from '@/wlEnv'
import jwt from 'jsonwebtoken'
import { AuthData } from '../server/api/auth/types'

export const signAccessToken = (authData: AuthData) =>
  jwt.sign(authData, wlEnv.auth.jwt.secretKey, {
    expiresIn: wlEnv.auth.jwt.accessTokenLifetime,
  })

export const signRefreshToken = (authData: AuthData) =>
  jwt.sign(authData, wlEnv.auth.jwt.secretKey, {
    expiresIn: wlEnv.auth.jwt.refreshTokenLifetime,
  })

export const verifyToken = (token: string) =>
  jwt.verify(token, wlEnv.auth.jwt.secretKey) as AuthData
