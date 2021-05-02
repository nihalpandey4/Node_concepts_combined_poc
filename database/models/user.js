const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db_connection_initializer')

const user_session_model = require("./user_session");

class user extends Model {}
user.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
      allowNull:false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull:false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      },
      allowNull:false
    },
  },
  { sequelize, modelName: 'user' },
)

user.hasOne(user_session_model,{
  onDelete:"cascade",
  foreignKey:{
    name:"user_id",
    allowNull:false
  }
})

user_session_model.belongsTo(user);

module.exports = user