const {User} = require('../models')

class Controller{
    static register(req,res){
        res.render('register')
    }

    static postRegister(req,res){
        const {email, password} = req.body
        User.create({ email, password})
            .then(createdUser =>{
                res.redirect('/')
            })
            .catch(err => res.send(err))
    }
}

module.exports = Controller