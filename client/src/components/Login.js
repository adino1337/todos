import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../features/userSlice';

export default function Login(){
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    
   
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

        dispatch(login(form))
        setForm({
          email: '',
          password: '',
        })
      }
      catch(err){
        console.error(err.message)
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
      <button>{user.loading ? <div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div> : "Login"}</button>
      <div id='info'>{user.error}</div>
    </form>
    );
  }
  

