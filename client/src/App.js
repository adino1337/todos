import React from 'react';
import TodoList from './components/TodoList'
import Form from './components/Form'
import Nav from './components/Nav'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "",
      isLogged: false,
    };
    this.handleAddItem.bind(this);
  }
  componentDidMount = () => {  
    (async () => {	
      const response = await fetch("http://localhost:5000/todos");
      const todos = await response.json();
      console.log(todos.data);
      this.setState({items: todos.data});
    })()
  }
  handleAddItem = (newItemm) => {
    this.setState(state => ({...state, items: [...state.items, newItemm ]}));
  }

  handleDelete = (itemToDelete) => {
    this.setState(state => {
      // 3. Zapracuj zmazanie polozky item z pola items. done
      itemToDelete.deleted = !itemToDelete.deleted;
      return {
        items: state.items
      }
    });
  }
  render() {
    return (
      <div>
        <Nav
          isLogged={this.state.isLogged}
          name={this.state.name}                  
        />
        <h1>ToDo's</h1>
        <div className='wrapper'>
        <TodoList
          items={this.state.items}
          onClick={this.handleDelete}
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