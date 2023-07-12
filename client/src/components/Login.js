import { useState } from 'react';
import * as userActions from '../api/userActions'

export default function Login(props){
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    
    const [infoMessage, setInfoMessage] = useState("")
    
    const handleChange = (evt) => {
        const value = evt.target.value;
        setForm({
          ...form,
          [evt.target.name]: value
        });
    }

    const handleLogin = async (e) => {
      e.preventDefault();      
      try{
        const res = await userActions.login(form)
        if(res.code !== 200)
          setInfoMessage(res.message);
        else{
          setInfoMessage("Logged successfully");
          props.setUser(res.userObject);
          setTimeout(() => {
            props.setLogScreen(false)
            props.setIsLogged(true)
          }, 1000)
        }
        setForm({
          email: '',
          password: '',
        })
      }
      catch(err){
        setInfoMessage(err.message)
      }
    }
    
  
    return (
      <form className='loginForm' onSubmit={handleLogin}>

      <div className='input'>
        <input type='text' name='email' onChange={handleChange} value={form.email} required/>
        <span className='placeholder'>Email</span>
      </div>
      <div className='input'>
        <input type='password' name='password' onChange={handleChange} value={form.password} required />
        <span className='placeholder'>Password</span>
      </div>
      <button>Login</button>
      <div id='info'>{infoMessage}</div>
    </form>
    );
  }
  

