const sign_up_service = require('../services/sign_up')

module.exports = async (req, res) => {
  const { username, password } = req.body
  try {
    const data = await sign_up_service(username, password)
    res.json({
      status: true,
      message: 'user added',
      data: data,
    })
  }
  catch(err){
      res.json({
          status:false,
          message:"user not added"
      })
  }
}
