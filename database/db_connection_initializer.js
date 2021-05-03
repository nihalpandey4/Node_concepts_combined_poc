const mysql = require('mysql');
const config=require('../config/config.json')["development"]
const { Sequelize } = require('sequelize');

var sequelize = new Sequelize(config.database, config.username, config.password,{
    host:config.host,
    dialect:config.dialect,
    timezone:'+05:30',
    logging:false,
    define:{
      underscored:true
    }
});


const con_init = mysql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password,
  connectTimeout:60000
});

con_init.query("CREATE DATABASE IF NOT EXISTS "+config.database, function (err, result) {
    if (err) throw err;
    con_init.destroy();
});
module.exports=sequelize;
