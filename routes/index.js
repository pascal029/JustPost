const express = require('express')
const router = express.Router()
const user = require('./user')
const post = require('./post')
const authUser = require('./authUser')
const registerUser = require('./registerUser')
const Controller = require('../controllers')


router.get('/', Controller.index)

router.use('/user', user)
router.use('/post', post)
router.use('/login', authUser)
router.use('/register', registerUser)


module.exports = router