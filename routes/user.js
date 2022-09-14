const express = require('express')
const Controller = require('../controllers/controllerUser')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('test from router user')
})
router.get('/register', Controller.register)


module.exports = router