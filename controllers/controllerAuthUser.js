const {User} = require('../models')
const bcryptjs = require('bcryptjs')
const sendMail = require('../helper/sendmail')

class Controller{
    static register(req,res){
        const {errors} = req.query
        res.render('register', {errors})
    }

    static postRegister(req,res){
        const {email, password} = req.body

        User.create({
            email:email,
            password:password
        })
            .then(user =>{
                return sendMail(user)
            })
            .then(info =>{
                res.redirect('/login')
            })
            .catch(err => {
                if(err.name == 'SequelizeValidationError'){
                    let errors = []
                    err.errors.map(el =>{
                        errors.push(el.message)
                    })
                    res.redirect(`/register?errors=${errors}`)
                } else {
                    res.send(err)
                }
                
            })
    }

    static logout(req,res){
        req.session.destroy()
        res.redirect('/')
    }

    static login(req,res){
        const errors = req.query
        console.log(req.query)
        res.render('login', {errors})
    }

    static postLogin(req,res){
        const {email, password} = req.body

        User.findOne({where : {email}})
            .then(user => {
                if(user){
                    const isValidPassword = bcryptjs.compareSync(password, user.password)
                    
                    if(isValidPassword){
                        req.session.userId = user.id
                        return res.redirect(`/dashboard/${req.session.userId}`)
                    } else {
                        const error = `Email / password salah`
                        return res.redirect(`/login?errors=${error}`)
                    }
                } else {
                    const error = `Kolom email dan password harus diisi`
                    return res.redirect(`/login?errors=${error}`)
                }
            })
            .catch(err =>{
                res.send(err)
            })
    }
    
}

module.exports = Controller