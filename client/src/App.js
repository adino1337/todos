import { useState } from 'react';
import TodoApp from './screens/TodoApp'
import Wrapper from './components/Wrapper'
import LogScreen from './screens/LogScreen'


export default function App() {

  const [logScreen, setLogScreen] = useState(true);
  const [user, setUser] = useState(undefined);
  const [isLogged, setIsLogged] = useState(false);

  const logoutHandle = () => {
    setIsLogged(false)
    setUser(undefined)
    setLogScreen(true)
  }

  return (
    <Wrapper        
        isLogged={isLogged}
        user={user} 
        logoutHandle={logoutHandle}
      >
      {logScreen ? 
      <LogScreen         
        setLogScreen={setLogScreen}
        setUser={setUser}
        setIsLogged={setIsLogged}
      />
       : 
      <TodoApp  
        user={user}       
      />}

      </Wrapper>
  );
}