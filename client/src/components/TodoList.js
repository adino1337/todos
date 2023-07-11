import { useState } from 'react';
import noToDos from './../images/noToDos.png'
import checked from './../images/checked.svg'
import notChecked from './../images/notChecked.svg'

export default function TodoList(props){
  const [mode,setMode] = useState("all")

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
            {props.items.length === 0 && <img className='noContent' src={noToDos} alt="noToDos" />}
            {props.items.length > 0 && 
            <div className='list'>          
              {props.items.sort((a, b) => Number(a.deleted) - Number(b.deleted))
              .filter((item) => {
                if(mode==="all")
                  return true 
                if(mode == "active")
                  return !item.deleted
                if(mode == "done")
                  return item.deleted           
              }).map(item => (
                <div className='item' key={item.id} onClick={(e) => props.onClick(item)}><div className='text'>{item.text}</div><img className='icon' src={item.deleted ? checked : notChecked} alt="done" /></div>
              ))}
            </div>}
        </div>

        </>
      );
  }

