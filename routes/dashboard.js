const express = require('express')
const Controller = require('../controllers')
const router = express.Router()


router.get('/:profileId', Controller.dashboard)
router.get('/:profileId/like/:postId', Controller.like)

module.exports = router