import React from 'react';
import TodoApp from './screens/TodoApp'
import Wrapper from './components/Wrapper'
import LogScreen from './screens/LogScreen'
class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: undefined,
      isLogged: false,
      logScreen: true,
    };

  }
  
  logScreenHandle = () => {
    this.setState({logScreen: !this.state.logScreen});  
  }
  userHandle = (loggedUser) => {
    this.setState({user: loggedUser.userObject});
  }
  isLoggedHandle = () => {
    this.setState({isLogged: !this.state.isLogged});
  }
  logoutHandle = () => {
    this.setState({user: undefined, isLogged: false, logScreen:true},);
  }
  render() {
    return (      
      <Wrapper
          isLogged={this.state.isLogged}
          user={this.state.user}    
          logScreen={this.logScreenHandle}
          logout={this.logoutHandle}
      >
        
      {this.state.logScreen ? 
      <LogScreen 
      logScreenHandle={this.logScreenHandle}
      userHandle={this.userHandle}
      isLoggedHandle={this.isLoggedHandle}
      />
       : 
      <TodoApp
        user={this.state.user}
      />}

      </Wrapper>
    
    );
  }
}


export default MainApp;