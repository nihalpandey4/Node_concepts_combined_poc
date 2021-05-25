const post_model = require("../../../database/models/posts");

const create_post = async(heading,content,user_id)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let post = {
                heading:heading,
                content:content,
                user_id:user_id,
                is_active:true
            }
            const response = await post_model.build(post).save();
            if(response){
                resolve(response)
            }
            else{
                throw new Error("unable to create post,try again")
            }
        }
        catch(err){
            reject(err)
        }
    })
}

module.exports = create_post;