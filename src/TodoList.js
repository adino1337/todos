import React from 'react';

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

export default TodoList;