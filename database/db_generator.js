const db_connection_initializer = require("./db_connection_initializer");

const user_model = require("./models/user");
const user_session_model = require("./models/user_session");
const post_model = require("./models/posts")

const db_generator = ()=>{
    db_connection_initializer.sync()
    .then(async()=>{
        console.log("database created");
        user_model.bulkCreate([]);
        post_model.bulkCreate([]);
        user_session_model.bulkCreate([]);
    })
    .catch(ex=>{
        console.log(ex.message);
    })
}

module.exports = db_generator;