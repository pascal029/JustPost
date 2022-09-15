const express = require('express')
const router = express.Router()
const user = require('./user')
const dashboard = require('./dashboard')
const authUser = require('./authUser')
const registerUser = require('./registerUser')
const logout = require('./logout')
const Controller = require('../controllers')


router.get('/', Controller.index)

router.use('/login', authUser)
router.use('/register', registerUser)
router.use((req,res,next) =>{
    if(!req.session.userId){
        const error = `Please login first`
        res.redirect(`/login?errors=${error}`)
    } else {
        next()
    }
})
router.use('/dashboard', dashboard)
router.use('/user', user)
router.use('/logout', logout)
module.exports = router