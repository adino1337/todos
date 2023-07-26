import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register, setError} from '../features/userSlice';
import { StyleSheet, Button, View, TouchableOpacity,Text } from 'react-native';
import { Isao } from 'react-native-textinput-effects';

export default function Register(props){    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)


    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })


    const handleChange = (name, value) => {
      setForm({
        ...form,
        [name]: value,
      });
    };

    const handleRegister = async (e) => {
      e.preventDefault();
      
      if(form.email === "")
      return dispatch(setError("Email is required"))
      if(form.password === "")
      return dispatch(setError("Password is required"))
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
    <View style={styles.container}>
      <View style={styles.form}>
      <Isao
    label={'email'}
    activeColor={'#6e00ef'}
    borderHeight={4}
    inputPadding={12}
    labelHeight={24}
    passiveColor={'#101010'}
    inputStyle={{ color: 'black' }}
    onChangeText={(text) => handleChange('email', text)}
    value={form.email}
  />
  <Isao
    label={'password'}
    activeColor={'#6e00ef'}
    borderHeight={4}
    inputPadding={12}
    labelHeight={24}
    passiveColor={'#101010'}
    inputStyle={{ color: 'black' }}
    secureTextEntry={true}
    onChangeText={(text) => handleChange('password', text)}
    value={form.password}
  />
  <Isao
    label={'confirm password'}
    activeColor={'#6e00ef'}
    borderHeight={4}
    inputPadding={12}
    labelHeight={24}
    passiveColor={'#101010'}
    inputStyle={{ color: 'black' }}
    secureTextEntry={true}
    onChangeText={(text) => handleChange('passwordConfirm', text)}
    value={form.passwordConfirm}
  />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      <Text style={{color:"red"}}>{user.error}</Text>
      </View>
      <Text style={{textAlign: 'center'}}>Already have an account? <Text style={{color:"#6e00ef"}} onPress={()=>props.setLogForm(true)}>Login!</Text></Text>
</View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {    
      flex: 1,
      justifyContent: 'space-around',
    },
    form:{
      padding: 20
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#6e00ef',
      padding: 15,
      marginTop:20
    },
    btnText:{
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    }
  });
