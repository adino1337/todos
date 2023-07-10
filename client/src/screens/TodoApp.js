import React from 'react';
import TodoList from '../components/TodoList'
import Form from '../components/Form'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],      
    };
    this.handleAddItem.bind(this);
  }
  componentDidMount = () => {  
    (async () => {	
      try{
        const response = await fetch("http://localhost:5000/todos");
        const todos = await response.json();
        this.setState({items: todos.data});  
      }
      catch(err){
        alert("Error "+err.message);
      }
    })()
  }
  handleAddItem = async (newItemm) => {
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  handleUpdate = async (itemToUpdate) => {
    try{
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
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
  render() {
    return (
      <div>        
        <h1>ToDo's</h1>
        <div className='wrapper'>
        <TodoList
          items={this.state.items}
          onClick={this.handleUpdate}
        />
        <Form
          items={this.state.items}
          submit = {this.handleAddItem}
        />
        </div>
      </div>
    );
  }
}


export default TodoApp;