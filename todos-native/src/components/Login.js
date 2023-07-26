import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login, setError} from '../features/userSlice';
import { StyleSheet,Text, TouchableOpacity, View, TextInput, } from 'react-native';
import { Isao } from 'react-native-textinput-effects';
export default function Login(props){
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
      if(form.email === "")
      return dispatch(setError("Email is required"))
      if(form.password === "")
      return dispatch(setError("Password is required"))

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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={{color:"red"}}>{user.error}</Text>
      </View>
      <Text style={{textAlign: 'center'}}>Don't have an account? <Text style={{color:"#6e00ef"}} onPress={()=>props.setLogForm(false)}>Register!</Text></Text>
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