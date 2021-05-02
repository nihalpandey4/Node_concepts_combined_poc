const sign_in_service = require("../services/sign_in");

module.exports = async(req,res)=>{
    const {username,password} = req.body; 
    try{
        const token = await sign_in_service(username,password);
        res.json({
            status:true,
            token:token,
            message:"signed in successfully"           
        })
    }
    catch(err){
        res.json({
            status: false,
            message:err.message
        })
    }
}