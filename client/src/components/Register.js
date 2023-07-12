import { useState} from 'react';
import * as userActions from '../api/userActions'
export default function Register(props){    
    
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
        const res = await userActions.register(form)
        if(res.code !== 201)
          setInfoMessage(res.message)
        else{
          setInfoMessage("User created successfully");
          localStorage.setItem("user",JSON.stringify(res.userObject));
          props.setUser(res.userObject)
          setTimeout(() => {
            props.setLogScreen(false)
            props.setIsLogged(true)
          }, 1000)
        }
        setForm({
          email: '',
          password: '',
          passwordConfirm: ''
        })
      }
      catch(err){
        setInfoMessage(err.message)
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
  

