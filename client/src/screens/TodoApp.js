import TodoList from '../components/TodoList'
import Form from '../components/Form'
import { useState, useEffect } from 'react';

export default function TodoApp(props){
  
  const [items, setItems] = useState([])

  useEffect(() => {
    const asyncFn = async () => { 
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
     };
    asyncFn();
  }, []);
  

  const handleAddItem = async (newItem) => {
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization': props.user.token},
        body: JSON.stringify(newItem)
      };
      const response = await fetch('http://localhost:5000/todos', requestOptions);
      const todo = await response.json();
      setItems([...items,todo.data])
    }
    catch(err){
      alert("Error: " + err.message);
    }
  }

  const handleUpdate = async (itemToUpdate,e) => {
    if(e.target.id === "deleteBtn"){
      try {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', 'Authorization': props.user.token },
          
        };
        await fetch('http://localhost:5000/todos/' + itemToUpdate._id, requestOptions);
        setItems((prevItems) => {
          return prevItems.filter(item => item._id !== itemToUpdate._id)
        });
      } catch (err) {
        alert("Error: " + err.message);
      }
    }
    else{
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': props.user.token },
        body: JSON.stringify({ deleted: !itemToUpdate.deleted })
      };
      await fetch('http://localhost:5000/todos/' + itemToUpdate._id, requestOptions);
      setItems((prevItems) => {
        return prevItems.map((item) => {
          if (item._id === itemToUpdate._id) {
            return { ...item, deleted: !item.deleted };
          } else {
            return item;
          }
        });
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  }}
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


