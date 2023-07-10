const express = require('express');
const router = express.Router();
const {getAllTodos,addTodo,updateTodo} = require('../controllers/tasks');


router.route('/').get(getAllTodos).post(addTodo);
router.route('/:id').put(updateTodo);

module.exports = router
