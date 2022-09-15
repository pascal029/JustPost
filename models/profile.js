'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
      Profile.hasMany(models.Post)
    }
    get formattedDate() {
      return this.dob.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    get formatDate() {
      var d = this.dob,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    }
  }
  
  Profile.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `Name is required`
        },
        notEmpty : {
          msg : `Name is required`
        }
      }
    },
    dob: {
      type : DataTypes.DATE,
      allowNull : false,
      validate : {
        notNull : {
          msg : `Date Of Birth is required`
        },
        notEmpty : {
          msg : `Date Of Birth is required`
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `Phone is required`
        },
        notEmpty : {
          msg : `Phone is required`
        }
      }
    },
    city: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `City is required`
        },
        notEmpty : {
          msg : `City is required`
        }
      }
    },
    photo: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `Name is required`
        },
        notEmpty : {
          msg : `Name is required`
        },
        isUrl : {
          msg : `Input must be a valid url`
        }
      }
    },
    UserId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};