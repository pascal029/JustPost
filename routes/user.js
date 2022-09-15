const express = require('express')
const Controller = require('../controllers/controllerUser')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('test from router user')
})

router.get('/:profileId/profile', Controller.profile)
router.get('/:profileId/profile/editProfile', Controller.editProfile)
router.post('/:profileId/profile/editProfile', Controller.saveProfile)
router.get('/:profileId/profile/addPost', Controller.createPost)
router.post('/:profileId/profile/addPost', Controller.savePost)
router.get('/:profileId/profile/:postId/editPost', Controller.editPost)
router.post('/:profileId/profile/:postId/editPost', Controller.updatePost)
router.get('/:profileId/profile/:postId/deletePost', Controller.deletePost)

module.exports = router