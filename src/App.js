import React from 'react';
import TodoList from './components/TodoList'
import Form from './components/Form'
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.handleAddItem.bind(this);
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
        <h3>TODO</h3>
        <TodoList
          items={this.state.items}
          onClick={this.handleDelete}
        />
        <Form
          items={this.state.items}
          submit = {this.handleAddItem}
        />
      </div>
    );
  }
}


export default TodoApp;