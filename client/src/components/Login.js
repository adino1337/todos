import { useState } from 'react';

export default function Login(props){
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
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...form})
        };
        const response = await fetch('http://localhost:5000/todos/user/login', requestOptions);
        const user = await response.json();
        if(user.code !== 200)
          document.getElementById('info').innerHTML = user.message;
        else{
          document.getElementById('info').innerHTML = "Logged successfully";
          props.setUser(user.userObject);
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
        document.getElementById('info').innerHTML = err.message
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
      <div id='info'></div>
    </form>
    );
  }
  

