import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTodo} from '../features/todosSlice'

export default function Forms() {
  const dispatch = useDispatch()
  

  const todos = useSelector(state => state.todos)
  const user = useSelector(state => state.user)

  const items = todos.todos
  const token = user.user.token
  
  const [text,setText] = useState("")
    
    // 1. Prepis handleChange ako arrow function. done
  const handleChange = (e) => {
    setText(e.target.value);
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }
    const newItem = {
      text: text,
      deleted: false
    };
    dispatch(addTodo({newItem, token}));
    setText("")
    
  }
    return (
    <form className='toDoForm' onSubmit={handleSubmit}>
      <div className='input'>
        <input
          id="new-todo"
          onChange={handleChange}
          value={text}    
          required              
        />
        <span className='placeholder'>New todo</span>
        </div>
        <button className='todoFormBtn'>{
          todos.loaders.postLoader
          ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          : <div class="lds-ring">Add #{items.length + 1}</div>
          }
        </button>
      </form>
    );
  }