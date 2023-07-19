import { useState } from 'react';
import { useSelector } from 'react-redux';
import Todos from './Todos'

export default function TodoList(){
  const [mode,setMode] = useState("all")

  const todos = useSelector(state => state.todos)
  const handleMode = e => {
    setMode(e.target.value)     
  }  
     return (
        <>
        <div className='radioButtons'>
          <label>
          <input type="radio" name="mode" checked={mode==="all"} value="all" onChange={handleMode} />
          All</label>
          <label>
          <input type="radio" name="mode" checked={mode==="active"} value="active" onChange={handleMode} />
          Active</label>
          <label>
          <input type="radio" name="mode" id='completed' checked={mode==="done"} value="done" onChange={handleMode} />
          Completed</label>
          </div>
          <div className='listWrapper' >
          {todos.loaders.getLoader 
            ? <div class="todosLoader lds-ring"><div></div><div></div><div></div><div></div></div>
            : <Todos mode={mode} />
          }
            
        </div>

        </>
      );
  }

