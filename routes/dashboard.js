const express = require('express')
const Controller = require('../controllers')
const router = express.Router()


router.get('/', Controller.dashboard)
router.get('/:postId/like', Controller.like)

module.exports = router