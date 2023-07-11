import { useState} from 'react';

export default function Register(props){    
    
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
        document.getElementById('info').innerHTML = 'Passwords do not match'
        setForm({
            ...form,
            password: "",
            passwordConfirm: ""
        })
      
      }
      else{
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...form})
        };
        const response = await fetch('http://localhost:5000/todos/user/register', requestOptions);
        const user = await response.json();
        if(user.code !== 201)
          document.getElementById('info').innerHTML = user.message;
        else{
          document.getElementById('info').innerHTML = "User created successfully";
          props.setUser(user.userObject)
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
        document.getElementById('info').innerHTML = err.message
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
        <div id='info'></div>
      </form>
      
    );
  }
  

