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
    
    
  
  render() {
    return (
    <form className='loginForm'>
      login
      </form>
    );
  }
  }

export default Login;