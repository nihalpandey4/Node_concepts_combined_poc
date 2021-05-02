const user_model = require("../../../database/models/user")
const home_service =async (user_id)=>{
    const user = await user_model.findOne({
        where:{
            id: user_id
        }
    })
    return user.username;
}

module.exports = home_service;