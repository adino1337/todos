import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../features/userSlice';
import { StyleSheet,Text, Button, View, TextInput,Alert } from 'react-native';

export default function Login(){
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    
   
    const handleChange = (name, value) => {
      setForm({
        ...form,
        [name]: value,
      });
    };

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
    
  
    return (/*
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
    </form>*/
    <View>
      <TextInput 
      placeholder='email'      
      value={form.email}
      onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput 
      secureTextEntry={true}
      placeholder='password'
      value={form.password}
      onChangeText={(text) => handleChange('password', text)}
      />
      <Button
        title="Login"
        color="#f194ff"
        onPress={handleLogin}
      />
      <Text>{user.error}</Text>
</View>
    );
  }
  

