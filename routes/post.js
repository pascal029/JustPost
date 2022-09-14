const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('test from router post')
})



module.exports = router