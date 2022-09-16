const express = require('express')
const Controller = require('../controllers/controllerAuthUser')
const router = express.Router()

router.get('/', Controller.admin)
router.get('/:userId/delete', Controller.delete)


module.exports = router