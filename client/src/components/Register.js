import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register, setError} from '../features/userSlice';

export default function Register(){    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)


    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })


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
        dispatch(setError('Passwords do not match'))

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
        dispatch(setError(err.message))
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
      <button>{user.loading ? <div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div> : "Register"}</button>
        <div id='info'>{user.error}</div>
      </form>
      
    );
  }
  

