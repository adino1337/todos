import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Wrapper(props){  

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const logoutHandle = async () => {
    dispatch(logout())
    await AsyncStorage.clear();
  }
  return (
    <View style={styles.container}> 
        {!user.loggedOut && <View className='logout'>
        <Text>{user.user.email}</Text><Text onPress={logoutHandle}>logout</Text></View>
        }
        {user.loggedOut && <Welcome />}
      {props.children}            
    </View>
  );
}


const styles = StyleSheet.create({
  container: {  
    height: '100%',
    justifyContent : 'space-between',
  },
});