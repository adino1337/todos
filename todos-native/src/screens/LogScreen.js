import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { StyleSheet, Text, View } from 'react-native';


export default function LogScreen() {
    const [logForm, setLogForm] = useState(true)
    
        return (
            <View style={styles.container}>
            {logForm?
            <Login
                setLogForm={setLogForm}
            />:
            <Register
                setLogForm={setLogForm}
            />}
            </View>
        )
      }

      

      const styles = StyleSheet.create({
        container: {    
          flex: 0.5,
        },
      });

  