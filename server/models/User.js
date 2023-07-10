const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'must provide email'],
    maxlength: [40, 'email can not be more than 40 characters'],
  },
  password: {
    type: String,
    required: [true, 'must provide password'],},
})

module.exports = mongoose.model('User', UserSchema)
