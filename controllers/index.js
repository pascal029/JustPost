const { Op } = require('sequelize')
const {Post, Profile, User} = require('../models')

class Controller{
    static index(req,res){
        console.log(req.session)
        res.render('index')
    }

    static dashboard(req, res) {
        let profileId= +req.params.profileId
        const {search, sort} = req.query

        let option = {
            include : {
                model : Profile,
                where : {}
            },
            order : []
        }
        

        if(search){
            option.include.where = {
                name : {
                    [Op.iLike] : `%${search}%`
                }                
            }
        }

        if(sort){
            if(sort == 'likeDesc'){
                option.order = [['like', 'DESC']]
            } else if(sort == 'likeAsc'){
                option.order = [['like', 'ASC']]
            }
        }

        if(option.order.length == 0){
            option.order = [['createdAt', 'desc']]
        }

        const data = {}
        Post.findAll(option)
        .then(posts =>{
            data.posts = posts
            return Post.avgLike()
        })
        .then(like =>{
            data.avgLike = like
            // console.log(data.avgLike.dataValues.avgLike)
            // res.send(data)
            res.render('dashboard', {data, profileId})
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