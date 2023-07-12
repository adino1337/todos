const Todo = require('../models/Todo')

const getAllTodos = async (req, res) => {
    const user_id = req.user.user_id
    const tasks = await Todo.find({user_id: user_id})
    res.status(200).json({code:200,data: tasks })
  }
  
const addTodo = async (req, res) => {
  req.body.user_id = req.user.user_id

  const todo = await Todo.create(req.body)
  res.status(201).json({code:201,data: todo })
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

const deleteTodo = async (req, res) => {
  const { id: taskID } = req.params

  const todo = await Todo.findByIdAndDelete({ _id: taskID })

  if (!todo) {
    res.status(404).json({code: 404, message: "Task not found"})
  }

  res.status(200).json({ code: 200, todo: todo})

}

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo
}
