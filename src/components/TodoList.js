import React from 'react';

// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "all",
    };
    this.props = props;
    this.handleMode.bind(this);
  }

  handleMode = e => {
    this.setState({mode: e.target.value});     
  }  

    render() {   
      return (
        <ul>
          <span>All</span>
          <input type="radio" name="mode" checked={this.state.mode==="all"} value="all" onChange={this.handleMode} /><br/>
          <span>ACTIVE</span>
          <input type="radio" name="mode" checked={this.state.mode==="active"} value="active" onChange={this.handleMode} /><br/>
          <span>DONE</span>
          <input type="radio" name="mode" checked={this.state.mode==="done"} value="done" onChange={this.handleMode} /><br/>
          {this.props.items.filter((item) => {
            if(this.state.mode==="all")
              return true 
            if(this.state.mode == "active")
              return !item.deleted
            if(this.state.mode == "done")
              return item.deleted           
          }).map(item => (
            <li className={item.deleted && "delete"} key={item.id} onClick={(e) => this.props.onClick(item)}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

export default TodoList;