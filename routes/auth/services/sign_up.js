const user_model = require("../../../database/models/user");
const sign_up =async (username,password)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user ={
                username:username,
                password:password,
                is_active:true
            }
            const response  = await user_model.build(user).save();
            resolve({userid:response.id,username:response.username})
        }
        catch(err){
            reject({message:err.errors[0].message})
        }
    })
}

module.exports = sign_up;