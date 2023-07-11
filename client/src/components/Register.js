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

    handleRegister = async (e) => {
      e.preventDefault();
      if(this.state.passwordConfirm !== this.state.password){
        document.getElementById('info').innerHTML = 'Passwords do not match'
        this.setState({
          password: '',
          passwordConfirm: ''
        })
      
      }
      else{
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...this.state})
        };
        const response = await fetch('http://localhost:5000/todos/user/register', requestOptions);
        const user = await response.json();
        if(user.code !== 201)
          document.getElementById('info').innerHTML = user.message;
        else{
          document.getElementById('info').innerHTML = "User created successfully";
          this.props.userHandle(user)
          setTimeout(() => {
            this.props.logScreenHandle()
            this.props.isLoggedHandle()
          }, 1000)
        }
        this.setState({
          email: '',
          password: '',
          passwordConfirm: ''
        })
      }
      catch(err){
        document.getElementById('info').innerHTML = err.message
      }}
    }
  
  render() {
    return (
    <form className='loginForm' onSubmit={this.handleRegister}>
        <input type='email' name='email' onChange={this.handleChange} value={this.state.email} required/>
        <input type='password' name='password' onChange={this.handleChange} value={this.state.password} required />
        <input type='password' name='passwordConfirm' onChange={this.handleChange} value={this.state.passwordConfirm} required />
        <button>Register</button>
        <div id='info'></div>
      </form>
      
    );
  }
  }

export default Register;