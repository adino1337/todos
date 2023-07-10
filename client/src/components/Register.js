import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          passwordConfirm: ''
        };
        this.props = props
      }
    
    handleChange = (event) => {
        const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    }

    handleRegister = async () => {
        console.log("ahoooj");
    }
  
  render() {
    return (
    <form className='loginForm' onSubmit={this.handleRegister}>
        <input type='email' name='email' onChange={this.handleChange} value={this.state.email} required/>
        <input type='password' name='password' onChange={this.handleChange} value={this.state.password} required />
        <input type='password' name='passwordConfirm' onChange={this.handleChange} value={this.state.passwordConfirm} required />
        <button>Register</button>
      </form>
    );
  }
  }

export default Register;