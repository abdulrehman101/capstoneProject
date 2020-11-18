const express = require('express')
const user = require('../controllers/shopUserController')
const router = express.Router()

const { authMiddleware } = require('../controllers/UserController')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('', user.findall)

router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

module.exports = router