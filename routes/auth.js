import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
})

import express from 'express'
const router = express.Router()
import { register, login, updateUser } from '../controllers/auth.js'
import authenticateUser from '../middleware/authentication.js'

router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, updateUser)
export default router
