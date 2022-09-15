const express = require('express')
const Controller = require('../controllers/controllerUser')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('test from router user')
})
router.get('/dashboard', Controller.dashboard)
router.get('/dashboard/:postId/like', Controller.like)
router.get('/profile', Controller.profile)

module.exports = router