const user_model = require("../../../database/models/user");
const user_session_model = require("../../../database/models/user_session");
const jwt = require("jsonwebtoken")
const jwt_key = require("../../../key.json")["jwt_key"];
const bcrypt = require("bcrypt");
const sign_up =async (username,password)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let hashed_password = await bcrypt.hash(password,10);;
            let user ={
                username:username,
                password:hashed_password,
                is_active:true
            }
            const response  = await user_model.build(user).save();
            
            const token = await jwt.sign({userid:response.id},jwt_key);
            
            await user_session_model.build({
                user_id:response.id,
                token:token,
                is_active:true
            }).save();
            
            resolve({userid:response.id,username:response.username})
        }
        catch(err){
            reject(err)
        }
    })
}

module.exports = sign_up;