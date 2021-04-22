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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'user' },
)

module.exports = user