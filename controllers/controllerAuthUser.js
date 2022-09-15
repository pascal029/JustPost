const {User} = require('../models')

class Controller{
    static register(req,res){
        res.render('register')
    }

    static postRegister(req,res){
        const {email, password} = req.body
        console.log(req.body, email, password)

        User.create({email,password})
            .then(createdUser =>{
                console.log(req.body)
                res.redirect('/')
            })
            .catch(err => res.send(err))
    }

    static login(req,res){
        res.render('login')
    }
    
}

module.exports = Controller