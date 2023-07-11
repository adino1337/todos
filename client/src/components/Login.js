import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
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

    handleLogin = async (e) => {
      e.preventDefault();
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...this.state})
        };
        const response = await fetch('http://localhost:5000/todos/user/login', requestOptions);
        const user = await response.json();
        if(user.code !== 200)
          document.getElementById('info').innerHTML = user.message;
        else{
          document.getElementById('info').innerHTML = "Logged successfully";
          this.props.userHandle(user)
          setTimeout(() => {
            this.props.logScreenHandle()
            this.props.isLoggedHandle()
          }, 1000)
        }
        this.setState({
          email: '',
          password: '',
        })
      }
      catch(err){
        document.getElementById('info').innerHTML = err.message
      }}
    
  render() {
    return (
      <form className='loginForm' onSubmit={this.handleLogin}>
      <input type='email' name='email' onChange={this.handleChange} value={this.state.email} required/>
      <input type='password' name='password' onChange={this.handleChange} value={this.state.password} required />
      <button>Login</button>
      <div id='info'></div>
    </form>
    );
  }
  }

export default Login;