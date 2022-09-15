const express = require('express')
const Controller = require('../controllers/controllerAuthUser')
const router = express.Router()

router.get('/', Controller.register)
router.post('/', Controller.postRegister)

module.exports = router