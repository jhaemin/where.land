import prisma from '@/modules/prisma'
import { currentTime } from '@/utils/time'
import { wlEnv } from '@/wlEnv'
import { User } from '@prisma/client'
import express from 'express'
import passport from 'passport'
import * as GoogleStrategy from 'passport-google-oauth'

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

      const existingUser = await prisma.user.findOne({
        where: {
          userID: profile.emails[0].value,
        },
      })

      if (existingUser) {
        done(null, existingUser)
        return
      }

      const createdUser = await prisma.user.create({
        data: {
          userID: profile.emails[0].value,
          registeredAt: currentTime(),
        },
      })

      done(null, createdUser)
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
    (err, user: User) => {
      res.redirect('/')
    }
  )(req, res, next)
})

export { googleAuthRouter }
