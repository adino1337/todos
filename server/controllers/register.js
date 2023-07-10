const User = require('../models/User')

const register = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json({code:201,data: user })
}


module.exports = register