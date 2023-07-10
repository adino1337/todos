import React from 'react';
import Login from '../components/Login'
import Register from '../components/Register'

class LogScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logForm: false,      
          };
    }
    showLoginForm = () => {
        this.setState({logForm: true});
    }
    showRegisterForm = () => {
        this.setState({logForm: false});
    }
    render() {
        return (
            <div className='loginWrapper'>
                <div className='links'>
                    <a onClick={this.showLoginForm}>Login</a>
                    <a onClick={this.showRegisterForm}>Register</a>
                </div>
            {this.state.logForm ?
            <Login />
            :
            <Register 
                logScreenHandle={this.props.logScreenHandle}
                userHandle={this.props.userHandle}
                isLoggedHandle={this.props.isLoggedHandle}
            />}
            </div>
        )
      }
}

export default LogScreen;