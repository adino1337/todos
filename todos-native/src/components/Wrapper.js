import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { todoReset } from '../features/todosSlice'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Wrapper(props){  

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const logoutHandle = async () => {
    dispatch(todoReset())
    dispatch(logout())
  }
  return (
    <View style={styles.container}> 
        {!user.loggedOut && 
        <View style={styles.nav}>
          <Text style={{fontWeight:"bold", fontSize:20,}}>{user.user.email}</Text>
          <Text style={{color: '#6e00ef', alignSelf:"center"}} onPress={logoutHandle}>logout</Text>
        </View>
        }
        {user.loggedOut && <Welcome />}
      {props.children}            
    </View>
  );
}


const styles = StyleSheet.create({
  nav:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  container: {  
    height: '100%',
    justifyContent : 'space-between',
  },
});