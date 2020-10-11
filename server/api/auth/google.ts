import { signAccessToken } from '@/modules/auth'
import { wlEnv } from '@/wlEnv'
import express from 'express'
import passport from 'passport'
import * as GoogleStrategy from 'passport-google-oauth'
import { AuthData } from './types'

passport.use(
  new GoogleStrategy.OAuth2Strategy(
    {
      clientID: wlEnv.auth.google.clientID,
      clientSecret: wlEnv.auth.google.clientSecret,
      callbackURL: '/api/auth/google/redirect',
    },
    async (...args) => {
      const profile = args[2]
      const done = args[3]

      if (!profile.emails) {
        done(Error(`Email doesn't exist`))
        return
      }

      // const existingUser = await prisma.user.findOne({
      //   where: {
      //     userID: profile.emails[0].value,
      //   },
      // })

      const existingUser = { id: 1 }

      if (existingUser) {
        done(null, {
          userID: existingUser.id,
        })
        return
      }

      // const createdUser = await prisma.user.create({
      //   data: {
      //     userID: profile.emails[0].value,
      //     registeredAt: currentTime(),
      //   },
      // })

      const createdUser = { id: 1 }

      done(null, {
        userID: createdUser.id,
      })
    }
  )
)

const googleAuthRouter = express.Router()

googleAuthRouter.get(
  '/auth/google/sign-up',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })
)

googleAuthRouter.get('/auth/google/redirect', (req, res, next) => {
  passport.authenticate(
    'google',
    {
      session: false,
    },
    async (err, authData: AuthData) => {
      const accessToken = signAccessToken(authData)
      // const refreshToken = await signRefreshToken(authData)

      res.cookie('accessToken', accessToken, {
        path: '/',
        httpOnly: true,
      })
      // res.cookie('refreshToken', refreshToken, {
      //   path: '/',
      //   httpOnly: true,
      // })
      res.redirect('/')
    }
  )(req, res, next)
})

export { googleAuthRouter }
