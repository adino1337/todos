import {useEffect } from 'react';
import TodoApp from './screens/TodoApp'
import Wrapper from './components/Wrapper'
import LogScreen from './screens/LogScreen'
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from './features/userSlice'


export default function App() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  

  
  useEffect(() => {
      const userL = JSON.parse(localStorage.getItem("user"))
      if(userL){
        dispatch(setUser(userL)) 
      }
    
  }, [])

  return (
    <Wrapper>
      {user.loggedOut ? <LogScreen/> : <TodoApp/>}
    </Wrapper>
  );
}