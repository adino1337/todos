const express = require('express');
const router = express.Router();
const {getAllTodos,addTodo,updateTodo} = require('../controllers/tasks');
const register = require('../controllers/register');
const login = require('../controllers/login');

router.route('/').get(getAllTodos).post(addTodo);
router.route('/:id').put(updateTodo);

router.route('/user/register').post(register)
router.route('/user/login').post(login)

module.exports = router
