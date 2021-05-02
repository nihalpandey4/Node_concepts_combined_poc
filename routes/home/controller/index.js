const home_service = require("../service/home_service");
const home_controller = async(req,res)=>{
    const user = req.user
    //const data = await home_service(user);
    res.json({
        status:true,
        message:"success",
        data:user
    })
}

module.exports = home_controller