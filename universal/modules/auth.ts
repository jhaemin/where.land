import { wlEnv } from '../wlEnv'
import { AuthData } from '../types'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const signAccessToken = (authData: AuthData) =>
  jwt.sign(authData, wlEnv.auth.jwt.secretKey, {
    expiresIn: wlEnv.auth.jwt.accessTokenLifetime,
  })

export const signRefreshToken = async (authData: AuthData) => {
  const refreshToken = jwt.sign(authData, wlEnv.auth.jwt.secretKey)

  await prisma.user.update({
    data: {
      refreshToken,
    },
    where: {
      id: authData.userID,
    },
  })

  return refreshToken
}

export const verifyToken = (token: string) =>
  jwt.verify(token, wlEnv.auth.jwt.secretKey) as AuthData
