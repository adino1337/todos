import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';


export default function LogScreen(props) {
    const [logForm, setLogForm] = useState(true)
    
        return (
            <div className='loginWrapper'>
                <div className='links'>
                    <a onClick={()=>setLogForm(true)} className={logForm && "strong"}>Login</a>
                    <a onClick={()=>setLogForm(false)} className={!logForm && "strong"}>Register</a>
                </div>
            {logForm ?
            <Login 
                setLogScreen={props.setLogScreen}
                setUser={props.setUser}
                setIsLogged={props.setIsLogged}/>
            :
            <Register                 
                setLogScreen={props.setLogScreen}
                setUser={props.setUser}
                setIsLogged={props.setIsLogged}
            />}
            </div>
        )
      }
  