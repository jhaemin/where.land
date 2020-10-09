import express from 'express'
import passport from 'passport'
import { googleAuthRouter } from './google'

const authRouter = express.Router()

authRouter.use(passport.initialize())
authRouter.use(googleAuthRouter)

export { authRouter }
