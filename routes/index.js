const express = require('express')
const router = express.Router()
const user = require('./user')
const dashboard = require('./dashboard')
const authUser = require('./authUser')
const registerUser = require('./registerUser')
const Controller = require('../controllers')


router.get('/', Controller.index)

router.use('/user', user)
router.use('/dashboard', dashboard)
router.use('/login', authUser)
router.use('/register', registerUser)


module.exports = router