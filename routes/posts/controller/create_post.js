const create_post = require("../service/create_post");
module.exports = async(req,res)=>{
    try{
        const {heading,content} = req.body;
        if(!heading){
            throw new Error("heading is required field");
        }
        if(!content){
            throw new Error("content is required field");
        }
        const user_id = req.user.user_id;
        const data = await create_post(heading,content,user_id);
        res.json({
            status:true,
            message:"created",
            data: data
        })
    }catch(err){
        res.json({
            status:false,
            message:err.message
        })
    }
}