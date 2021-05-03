const db_connection_initializer = require("./db_connection_initializer");

const user_model = require("./models/user");
const user_session_model = require("./models/user_session");
const post_model = require("./models/posts")

const db_generator = ()=>{
    db_connection_initializer.sync()
    .then(async()=>{
        console.log("database created");
        await post_model.bulkCreate([]);
        await user_model.bulkCreate([]);
        await user_session_model.bulkCreate([]);
    })
    .catch(ex=>{
        console.log(ex.message);
    })
}

module.exports = db_generator;