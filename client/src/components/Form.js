import {useState} from 'react'

export default function Form(props) {
    
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
    props.submit(newItem)
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
        <button>
          Add #{props.items.length + 1}
        </button>
      </form>
    );
  }