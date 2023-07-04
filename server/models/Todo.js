const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [40, 'name can not be more than 20 characters'],
  },
  deleted: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Todo', TaskSchema)
