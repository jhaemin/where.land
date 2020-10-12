import { wlEnv } from '~/wlEnv'
import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import { googleAuthRouter } from './google'
import { AuthData } from '~/types'
import { prisma } from '@/modules/prisma'

const authRouter = express.Router()

authRouter.use(passport.initialize())
authRouter.use(googleAuthRouter)

authRouter.post<{}, {}, { authData: AuthData }>(
  '/sign-access-token',
  (req, res) => {
    res.send(
      jwt.sign(req.body.authData, wlEnv.auth.jwt.secretKey, {
        expiresIn: wlEnv.auth.jwt.accessTokenLifetime,
      })
    )
  }
)

authRouter.post<{}, {}, { authData: AuthData }>(
  '/sign-refresh-token',
  async (req, res) => {
    const { authData } = req.body

    const refreshToken = jwt.sign(authData, wlEnv.auth.jwt.secretKey)

    await prisma.user.update({
      data: {
        refreshToken,
      },
      where: {
        id: authData.userID,
      },
    })

    res.send(refreshToken)
  }
)

authRouter.post<{}, {}, { token: string }>('/verify-token', (req, res) => {
  const { token } = req.body

  jwt.verify(token, wlEnv.auth.jwt.secretKey) as AuthData
})

export { authRouter }
