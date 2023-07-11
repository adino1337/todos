import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: '',
        };
        this.props = props
        this.submit = props.submit
        this.handleChange = this.handleChange.bind(this);
      }
    
    // 1. Prepis handleChange ako arrow function. done
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      deleted: false
    };
    this.setState(state => {
      // 2. Zapracuj pridanie polozky newItem do pola items. done

      this.submit(newItem)
      return {
        text: ''
      };
    });
    
  }
  render() {
    return (
    <form className='toDoForm' onSubmit={this.handleSubmit}>
      <div className='input'>
        <input
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}    
          required              
        />
        <span className='placeholder'>New todo</span>
        </div>
        <button>
          Add #{this.props.items.length + 1}
        </button>
      </form>
    );
  }
  }

export default Form;