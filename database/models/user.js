const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db_connection_initializer')

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

module.exports = user