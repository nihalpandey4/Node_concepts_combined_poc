const user_model = require("../../../database/models/user");
const user_session_model = require("../../../database/models/user_session");
const jwt = require("jsonwebtoken")
const jwt_key = require("../../../key.json")["jwt_key"];
const sign_up =async (username,password)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user ={
                username:username,
                password:password,
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
            reject({message:err.errors[0].message})
        }
    })
}

module.exports = sign_up;