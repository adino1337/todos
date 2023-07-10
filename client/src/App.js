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
      logScreen: false,
    };

  }
  
  logScreenHandle = () => {
    this.setState({logScreen: !this.state.logScreen});  
  }
  userHandle = (loggedUser) => {
    console.log(loggedUser.userObject);
    this.setState({user: loggedUser.userObject});
  }
  isLoggedHandle = () => {
    this.setState({isLogged: !this.state.isLogged});
  }

  render() {
    return (      
      <Wrapper
          isLogged={this.state.isLogged}
          user={this.state.user}    
          logScreen={this.logScreenHandle}
  
      >
        
      {this.state.logScreen ? 
      <LogScreen 
      logScreenHandle={this.logScreenHandle}
      userHandle={this.userHandle}
      isLoggedHandle={this.isLoggedHandle}
      />
       : 
      <TodoApp/>}

      </Wrapper>
    
    );
  }
}


export default MainApp;