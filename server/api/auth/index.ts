import { wlEnv } from '@/wlEnv'
// import { PrismaClient } from '@prisma/client'
import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import { googleAuthRouter } from './google'
import { AuthData } from './types'

// const prisma = new PrismaClient()

const authRouter = express.Router()

authRouter.use(passport.initialize())
authRouter.use(googleAuthRouter)

export { authRouter }

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
