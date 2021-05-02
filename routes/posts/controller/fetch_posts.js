const fetch_posts = require("../service/fetch_posts");
module.exports = async(req,res)=>{
    try{
        const user_id  = req.user.user_id;
        const posts = fetch_posts(user_id);
        res.json({
            status:true,
            message:"sucess",
            data:posts
        })
    }
    catch(err){
        res.json({
            status:false,
            message:err.message
        })
    }
}