const user_model = require('../../../database/models/user')
const user_session_model = require("../../../database/models/user_session");

const sign_in = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await user_model.findOne({
        where: {
          username: username,
          password: password
        },
        include:[{
          model:user_session_model,
          attributes:["token"]
        }],
        attributes:["username","password","id"]
      })
      if (user) {
        resolve(user.user_session.token)
      } else {
        throw new Error("username or password doesn't match")
      }
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = sign_in
