import express from 'express'
import { authRouter } from './auth'

const apiRouter = express.Router()

apiRouter.use(authRouter)

export { apiRouter }
