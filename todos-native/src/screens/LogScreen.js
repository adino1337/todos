import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { StyleSheet, Text, View } from 'react-native';


export default function LogScreen() {
    const [logForm, setLogForm] = useState(true)
    
        return (
            <View>
                <View className='links'>
                    <Text onPress={()=>setLogForm(true)} className={logForm ? "strong" : ""}>Login</Text>
                    <Text onPress={()=>setLogForm(false)} className={!logForm ? "strong" : ""}>Register</Text>
                </View>
            {logForm?<Login/>:<Register/>}
            </View>
        )
      }

      

  