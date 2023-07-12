const express = require('express');
const router = express.Router();
const {getAllTodos,addTodo,updateTodo, deleteTodo} = require('../controllers/tasks');
const register = require('../controllers/register');
const login = require('../controllers/login');
const auth = require('../middleware/auth');

router.get('/',auth,getAllTodos);

router.post('/',auth,addTodo);
router.put('/:id',auth,updateTodo);
router.delete('/:id',auth,deleteTodo);

router.route('/user/register').post(register)
router.route('/user/login').post(login)

module.exports = router
