const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db_connection_initializer')

const user_model = require("./user");

class post extends Model {}
post.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    heading: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
      unique: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
  },
  { sequelize, modelName: 'post' },
)

user_model.hasMany(post,{
    onDelete:"cascade",
    foreignKey:{
        name:"created_by_user_id",
        allowNull:false
    }
})

post.belongsTo(user_model);

module.exports = post;