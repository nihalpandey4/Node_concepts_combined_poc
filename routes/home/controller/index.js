const home_controller = (req,res)=>{
    res.json({
        status:true,
        message:"success",
        data:"Hello world"
    })
}

module.exports = home_controller