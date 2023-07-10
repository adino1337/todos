const express = require('express');
const router = express.Router();
const {getAllTodos,addTodo,updateTodo} = require('../controllers/tasks');
const register = require('../controllers/register');

router.route('/').get(getAllTodos).post(addTodo);
router.route('/:id').put(updateTodo);

router.route('/register').post(register)

module.exports = router
