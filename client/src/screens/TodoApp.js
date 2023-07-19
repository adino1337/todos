import TodoList from '../components/TodoList'
import Form from '../components/Form'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTodos} from '../features/todosSlice'
export default function TodoApp(){
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()

  
  
  useEffect(() => {
    dispatch(getTodos(user.user.token))
  }, []);
  

  return (
      <div>        
        <h1>ToDo's</h1>
        <div className='wrapper'>
        <TodoList />
        <Form/>
        </div>
      </div>
    );
}


