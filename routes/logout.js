const express = require('express')
const Controller = require('../controllers/controllerAuthUser')
const router = express.Router()


router.get('/', Controller.logout)


module.exports = router