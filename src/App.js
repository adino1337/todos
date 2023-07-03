import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList
          items={this.state.items}
          onClick={this.handleDelete}
        />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  // 1. Prepis handleChange ako arrow function.
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => {
      // 2. Zapracuj pridanie polozky newItem do pola items.
      let items = state.items;

      return {
        items,
        text: ''
      };
    });
  }

  handleDelete = (item) => {
    this.setState(state => {
      // 3. Zapracuj zmazanie polozky item z pola items.
      let items = state.items;

      return {
        items
      }
    });
  }
}

// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} onClick={(e) => this.props.onClick(item)}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;