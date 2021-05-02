const user_model = require('../../../database/models/user')

const sign_in = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await user_model.findOne({
        where: {
          username: username,
          password: password
        }
      })
      if (user) {
        resolve('adnadkjakdj')
      } else {
        throw new Error("username or password doesn't match")
      }
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = sign_in
