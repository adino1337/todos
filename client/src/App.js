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

  render() {
    return (      
      <Wrapper
          isLogged={this.state.isLogged}
          name={this.state.name}    
          logScreen={this.logScreenHandle}
  
      >
        
      {this.state.logScreen ? <LogScreen /> : <TodoApp/>}
      </Wrapper>
    
    );
  }
}


export default MainApp;