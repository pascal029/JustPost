'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile)
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        notNull : {
          msg : `Email is required`
        },
        notEmpty : {
          msg : `Email is required`
        },
        isEmail : {
          msg : `Email Format is wrong`
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        len: {
          args: [8,32],
          msg: "Password must contain minimum 8 and maximum 32 characters"
        },
        notNull : {
          msg : `Password is required`
        },
        notEmpty : {
          msg : `Password is required`
        },
        
      }
    },
    role : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(user =>{
    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(user.password, salt)


    user.password = hash
    user.role = 'user'

  })
  return User;
};