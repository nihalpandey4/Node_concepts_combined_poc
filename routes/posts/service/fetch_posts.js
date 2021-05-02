const user_model = require("../../../database/models/user");
const post_model = require("../../../database/models/posts");
const fetch_posts = async(user_id)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const user_and_posts = await user_model.findOne({
                where:{
                    id:user_id
                },
                include:[{
                    model:post_model
                }]
            })
            resolve(user_and_posts);
        }
        catch(err){
            reject(err);
        }
    })
}