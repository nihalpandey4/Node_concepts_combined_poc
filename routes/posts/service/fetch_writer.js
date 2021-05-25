const post_model = require("../../../database/models/posts");
const user_model = require("../../../database/models/user");

module.exports = async(post_id)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const post_and_user = await post_model.findOne({
                where:{
                    id:post_id
                },
                include:[{
                    model:user_model
                }]
            })
            console.log(post_and_user);
            resolve(post_and_user.user)
        }catch(ex){
            reject(ex);
        }
    })
}