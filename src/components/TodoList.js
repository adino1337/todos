import React from 'react';

// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "all",
    };
  }

  handleMode = e => {
    this.setState({mode: e.value});
  }

    render() {
      return (
        <ul>
          <span>All</span>
          <input type="radio" name="mode" {...this.state.mode==="all" && "checked"} value="all" onChange={this.handleMode} /><br/>
          <span>ACTIVE</span>
          <input type="radio" name="mode" value="active" onChange={this.handleMode} /><br/>
          <span>DONE</span>
          <input type="radio" name="mode" value="done" onChange={this.handleMode} /><br/>
          <h2>{this.state.mode}</h2>
          {this.props.items.map(item => (
            <li className={item.deleted && "delete"} key={item.id} onClick={(e) => this.props.onClick(item)}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

export default TodoList;