import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../features/userSlice';

export default function Register(){    
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const [infoMessage,setInfoMessage] = useState("")

    const handleChange = (evt) => {
        const value = evt.target.value;
        setForm({
          ...form,
          [evt.target.name]: value
        });
    }

    const handleRegister = async (e) => {
      e.preventDefault();
      if(form.passwordConfirm !== form.password){
        setInfoMessage('Passwords do not match')
        setForm({
            ...form,
            password: "",
            passwordConfirm: ""
        })      
      }
      else{
      try{
        dispatch(register(form))

        setForm({
          email: '',
          password: '',
          passwordConfirm: ''
        })
      }
      catch(err){
        console.error(err)
      }}
    }
  
    return (      
    <form className='loginForm' onSubmit={handleRegister}>
    
      <div className='input'>
        <input type='text' name='email' onChange={handleChange} value={form.email} required/>
        <span className='placeholder'>Email</span>
      </div>
      <div className='input'>
        <input type='password' name='password' onChange={handleChange} value={form.password} required />
        <span className='placeholder'>Password</span>
      </div>
      <div className='input'>
        <input type='password' name='passwordConfirm' onChange={handleChange} value={form.passwordConfirm} required />
        <span className='placeholder'>Confirm password</span>
      </div>
        <button>Register</button>
        <div id='info'>{infoMessage}</div>
      </form>
      
    );
  }
  

