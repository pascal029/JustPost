const { Profile, User, Post } = require('./../models');

class Controller {

    static profile(req, res) {
        Profile.findOne({
            where: { id: +req.params.profileId },
            include: [Post]
        })
            .then(result => {
                res.render('profile', { result })
                // res.send (result)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static editProfile(req, res) {
        Profile.findOne({
            where: { id: +req.params.profileId }
        })
            .then(result => {
                res.render('editProfile', { result })
                // res.send (result)
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
}

module.exports = Controller