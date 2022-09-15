<<<<<<< HEAD
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
=======
const { Profile, User, Post } = require('./../models');

class Controller {
    static register(req, res) {
        res.render('register')
    }

    static dashboard(req, res) {
        Post.findAll({
            include : [Profile],
            order: [
                ["id", 'ASC']
            ]
        })
        .then(result =>{
            // res.render ('dashboard', {result})
            res.send (result)
        })
        .catch(err=>{
            res.send (err)
        })
    }

    static like(req, res) {
        Post.findByPk(+req.params.postId)
            .then((post) => {
                return post.increment('like')
            })
            .then(() => {
                res.redirect(`/user/${+req.params.userId}/dashboard`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static profile(req, res) {
        res.send('masuk')
>>>>>>> 098d98fc2606920f19529e9bfc5cd7b5ed84b785
    }
}

module.exports = Controller