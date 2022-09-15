const { Profile, User, Post } = require('./../models');

class Controller {

    static profile(req, res) {
        Profile.findOne({
            where: { id: +req.params.profileId },
            include: [Post]
        })
            .then(result => {
                if (!result){
                    res.redirect (`/user/${+req.params.profileId}/createProfile`)
                }
                else{
                res.render('profile', { result })
                }
            })
            .catch(err => {
                res.send(err)
            })
    }
    static createProfile(req, res){
        const errors = req.query
        let profileId = +req.params.profileId
        // res.send(errors)
        res.render ('createProfile', {profileId, errors})
    }
    static saveNewProfile(req, res){
        Profile.create({
            name: req.body.name,
            dob: req.body.dob,
            phone: req.body.phone,
            city: req.body.city,
            photo: req.body.photo,
            UserId : +req.params.profileId
        })
            .then(result => {
                res.redirect(`/user/${+req.params.profileId}/profile`)
            })
            .catch(err => {
                if(err.name == 'SequelizeValidationError'){
                    let errors = []
                    err.errors.map(el =>{
                        errors.push(el.message)
                    })
                    res.redirect(`/user/${+req.params.profileId}/createProfile?errors=${errors}`)
                } else {
                    res.send(err)
                }
                
            })
    }
    static editProfile(req, res) {
        Profile.findOne({
            where: { id: +req.params.profileId }
        })
            .then(result => {
                res.render('editProfile', { result })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static saveProfile(req, res) {
        Profile.update({
            name: req.body.name,
            dob: req.body.dob,
            phone: req.body.phone,
            city: req.body.city,
            photo: req.body.photo
        },
            {
                where: { id: +req.params.profileId }
            })
            .then(result => {
                res.redirect(`/user/${+req.params.profileId}/profile`)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static createPost(req, res) {
        res.send('masuk')
    }
    static savePost(req, res) {
        res.send('masuk')
    }
    static editPost(req, res) {
        res.send('masuk')
    }
    static updatePost(req, res) {
        res.send('masuk')
    }
    static deletePost(req, res) {
        Post.destroy({
            where: { id: req.params.postId }
        })
            .then(result => {
                res.redirect(`/user/${+req.params.profileId}/profile`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller