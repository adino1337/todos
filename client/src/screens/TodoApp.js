import TodoList from '../components/TodoList'
import Form from '../components/Form'
import { useState, useEffect } from 'react';

export default function TodoApp(props){
  
  const [items, setItems] = useState([])

  useEffect(async () => {      	
      try{
        const requestOptions = {
          method: 'GET',
          headers: {'Authorization': props.user.token},
        };
        const response = await fetch("http://localhost:5000/todos",requestOptions);
        const todos = await response.json();
        setItems(todos.data);  
      }
      catch(err){
        alert("Error "+err.message);
      }
    }
  )

  const handleAddItem = async (newItemm) => {
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization': this.props.user.token},
        body: JSON.stringify(newItemm)
      };
      const response = await fetch('http://localhost:5000/todos', requestOptions);
      const todo = await response.json();
      this.setState(state => ({...state, items: [...state.items, todo.data ]}));
    }
    catch(err){
      alert("Error: " + err.message);
    }
  }

  const handleUpdate = async (itemToUpdate) => {
    try{
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json','Authorization': this.props.user.token},
        body: JSON.stringify({deleted: !itemToUpdate.deleted})
      };
      const response = await fetch('http://localhost:5000/todos/'+itemToUpdate._id, requestOptions);
      const todo = await response.json();
      this.setState(state => {
        // 3. Zapracuj zmazanie polozky item z pola items. done
        itemToUpdate.deleted = !itemToUpdate.deleted;
        return {
          items: state.items
        }
      });    
    }
    catch(err){
      alert("Error: " + err.message);
    }
    
  }
    return (
      <div>        
        <h1>ToDo's</h1>
        <div className='wrapper'>
        <TodoList
          items={items}
          onClick={handleUpdate}
        />
        <Form
          items={items}
          submit = {handleAddItem}
        />
        </div>
      </div>
    );
}


