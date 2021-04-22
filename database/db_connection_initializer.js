const mysql2 = require('mysql2');
const config=require('../config/config.json')
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


const con_init = mysql2.createConnection({
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
