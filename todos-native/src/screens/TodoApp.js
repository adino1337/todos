import TodoList from '../components/TodoList'
import Form from '../components/Form'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTodos} from '../features/todosSlice'
import { StyleSheet,Text, TouchableOpacity, View, TextInput, } from 'react-native';

export default function TodoApp(){
  const user = useSelector(state=>state.user)
  const todos = useSelector(state=>state.todos)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos(user.user.token))
  }, []);
  
  console.log(todos)

return (
  <View>
    <Text>ToDo's</Text>
    <TodoList />
    <Form/>
  </View>
)}
