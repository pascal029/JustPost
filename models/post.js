'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Profile,{
        onDelete: 'CASCADE'
      })
    }

    static avgLike (){
      return Post.findOne({
        attributes : [[sequelize.fn('avg', sequelize.col('like')), 'avgLike']]
      })
    }
  }
  Post.init({
    post: {
      type : DataTypes.STRING,
      allowNull:false,
      validate : {
        notNull : {
          msg : `Post can't be empty`
        },
        notEmpty : {
          msg : `Post can't be empty`
        }
      }
    },
    imageUrl: {
      type : DataTypes.STRING,
      validate : {
        isUrl : {
          msg : `imageUrl must be a valid url`
        }
      }
    },
    like: DataTypes.INTEGER,
    ProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });

  Post.beforeCreate(post =>{
    post.like = 0
  })
  return Post;
};