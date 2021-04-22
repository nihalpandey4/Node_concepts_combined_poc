const db_connection_initializer = require("./db_connection_initializer");

const user_model = require("./models/user");

const db_generator = ()=>{
    db_connection_initializer.sync()
    .then(()=>{
        user_model.bulkCreate([]);
    })
    .catch(ex=>{
        console.log(ex.message);
    })
}

module.exports = db_generator;