const express = require('express')
const Controller = require('../controllers/controllerUser')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('test from router user')
})
router.get('/register', Controller.register)
router.get('/:profileId/dashboard', Controller.dashboard)
router.get('/:profileId/dashboard/:postId/like', Controller.like)
router.get('/:profileId/profile', Controller.profile)

module.exports = router