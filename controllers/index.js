const {Post, Profile, User} = require('../models')

class Controller{
    static index(req,res){
        res.render('index')
    }

    static dashboard(req, res) {
        let profileId= +req.params.profileId
        Post.findAll({
            include : [Profile],
            order: [
                ["id", 'ASC']
            ]
        })
        .then(result =>{
            res.render ('dashboard', {result, profileId})
            // res.send (result, +req.params.profileId)
            // console.log(result)
        })
        .catch(err=>{
            res.send (err)
        })
    }

    static like(req, res) {
        let profileId= +req.params.profileId
        Post.findByPk(+req.params.postId)
            .then((post) => {
                return post.increment('like')
            })
            .then(() => {
                res.redirect(`/dashboard/${profileId}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = Controller