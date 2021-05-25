const fetch_owner = require("../service/fetch_writer");

module.exports = async(req,res)=>{
    try{
        const post_id = req.body.post_id;
        if(!post_id){
            throw new Error("post id missing");
        }
        const response = await fetch_owner(post_id);
        res.json({
            status:true,
            message:"found",
            data:response
        })
    }
    catch(ex){
        res.json({
            status:false,
            message:ex.message,
            data:{}
        })
    }
}