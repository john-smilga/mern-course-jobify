const rateLimiter = require('express-rate-limit')

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
})
const express = require('express')
const router = express.Router()
const { register, login, updateUser } = require('../controllers/auth')
const authenticateUser = require('../middleware/authentication')

router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, updateUser)
module.exports = router
