const { Op } = require('sequelize')
const {Post, Profile, User} = require('../models')

class Controller{
    static index(req,res){
        console.log(req.session)
        res.render('index')
    }

    static dashboard(req, res) {
        let profileId= +req.params.profileId
        // console.log(req.query)
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

        console.log(option)


        Post.findAll(option)
        .then(posts =>{
            res.render('dashboard', {posts, profileId})    
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