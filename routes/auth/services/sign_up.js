const user_model = require("../../../database/models/user");
const sign_up =async (username,password)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user ={
                name:username,
                password:password,
                is_active:true
            }
            const response  = await user_model.build(user).save();
            console.log(response);
            resolve({message:response})
        }
        catch(err){
            reject({message:err.message})
        }
    })
}

module.exports = sign_up;