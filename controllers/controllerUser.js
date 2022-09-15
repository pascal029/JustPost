const { Profile, User, Post } = require('./../models');

class Controller {
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
            // console.log(result)
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
    }
}

module.exports = Controller