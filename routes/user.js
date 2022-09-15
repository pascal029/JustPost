const express = require('express')
const Controller = require('../controllers/controllerUser')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('test from router user')
})
router.get('/register', Controller.register)
<<<<<<< HEAD
router.post('/register', Controller.postRegister)

=======
router.get('/:profileId/dashboard', Controller.dashboard)
router.get('/:profileId/dashboard/:postId/like', Controller.like)
router.get('/:profileId/profile', Controller.profile)
>>>>>>> 098d98fc2606920f19529e9bfc5cd7b5ed84b785

module.exports = router