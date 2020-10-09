import bodyParser from 'body-parser'
import chalk from 'chalk'
import express from 'express'
import next from 'next'
import { apiRouter } from './api'

const dev = process.env.NODE_ENV === 'development'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use('/api', apiRouter)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = dev ? 3000 : 15000

  server.listen(port, () => {
    console.log(`${chalk.yellow('server')} - listening on port ${port}`)
  })
})
