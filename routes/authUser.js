const express = require('express')
const Controller = require('../controllers/controllerAuthUser')
const router = express.Router()

router.get('/', Controller.login)
router.post('/', Controller.postLogin)


router.use(function(req,res,next){
    console.log(req.session)
})
module.exports = router