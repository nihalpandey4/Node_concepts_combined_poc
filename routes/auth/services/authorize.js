const user_session_model = require("../../../database/models/user_session");
const user_model = require("../../../database/models/user");
module.exports=async(req,res,next)=>{
    const auth = req.headers.authorization.slice(7);
    const user_session = await user_session_model.findOne({
        where:{
            token:auth
        },
        include:[{
            model:user_model
        }]
    })
    if(user_session){
        req.user = {
            user_id: user_session.user.id,
            username: user_session.user.username,
        }
        const _user = await user_model.findOne({
            where:{
                id:user_session.user.id
            },
            include:[{
                model:user_session_model
            }]
        })
        console.log(_user);
        next();
    }
    else{
        res.json({
            status:false,
            message:"unauthorized"
        })
    }
}