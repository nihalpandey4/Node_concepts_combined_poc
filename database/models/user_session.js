const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db_connection_initializer')

const user_model = require("./user");

class user_session extends Model {}
user_session.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    token: {
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
  { sequelize, modelName: 'user_session' },
)

module.exports = user_session;