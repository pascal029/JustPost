const {Post, Profile, User} = require('../models')

class Controller{
    static index(req,res){
        res.render('index')
    }

    static dashboard(req, res) {
        Post.findAll({
            include : [Profile],
            order: [
                ["id", 'ASC']
            ]
        })
        .then(result =>{
            res.render ('dashboard', {result})
            // res.send (result)
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

}

module.exports = Controller