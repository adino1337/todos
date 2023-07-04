const Todo = require('../models/Todo')

const getAllTodos = async (req, res) => {
    const tasks = await Todo.find({})
    res.status(200).json({ tasks })
  }
  
const addTodo = async (req, res) => {
  const todo = await Todo.create(req.body)
  res.status(201).json({ todo })
}

const updateTodo = async (req, res) => {
  const { id: taskID } = req.params

  const todo = await Todo.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!todo) {
    res.status(404).json({code: 404, message: "Task not found"})
  }

  res.status(200).json({ code: 200, todo: todo})
}

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo
}
