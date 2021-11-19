import dotenv from 'dotenv'
dotenv.config()
import('express-async-errors')

import path from 'path'
import express from 'express'
const app = express()

import helmet from 'helmet'
import xss from 'xss-clean'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'

import connectDB from './db/connect.js'
import authenticateUser from './middleware/authentication.js'

// routers
import authRouter from './routes/auth.js'
import jobsRouter from './routes/jobs.js'

// error handler
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())
app.use(helmet())
// not needed if client and back-end on the same server (heroku)
app.use(cors())
app.use(xss())
app.use(mongoSanitize())

// only when ready to deploy
// app.use(express.static(path.resolve(__dirname, './client/build')))

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

// only when ready to deploy
// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
// })

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
