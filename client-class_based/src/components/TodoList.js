import React from 'react';
import noToDos from './../images/noToDos.png'
import checked from './../images/checked.svg'
import notChecked from './../images/notChecked.svg'
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
        <>
        <div className='radioButtons'>
          <label>
          <input type="radio" name="mode" checked={this.state.mode==="all"} value="all" onChange={this.handleMode} />
          All</label>
          <label>
          <input type="radio" name="mode" checked={this.state.mode==="active"} value="active" onChange={this.handleMode} />
          Active</label>
          <label>
          <input type="radio" name="mode" id='completed' checked={this.state.mode==="done"} value="done" onChange={this.handleMode} />
          Completed</label>
          </div>
          <div className='listWrapper' >
            {this.props.items.length === 0 && <img className='noContent' src={noToDos} alt="noToDos" />}
            {this.props.items.length > 0 && 
            <div className='list'>          
              {this.props.items.sort((a, b) => Number(a.deleted) - Number(b.deleted))
              .filter((item) => {
                if(this.state.mode==="all")
                  return true 
                if(this.state.mode == "active")
                  return !item.deleted
                if(this.state.mode == "done")
                  return item.deleted           
              }).map(item => (
                <div className='item' key={item.id} onClick={(e) => this.props.onClick(item)}><div className='text'>{item.text}</div><img className='icon' src={item.deleted ? checked : notChecked} alt="done" /></div>
              ))}
            </div>}
        </div>

        </>
      );
    }
  }

export default TodoList;