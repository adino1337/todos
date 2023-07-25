import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { StyleSheet, Text, View } from 'react-native';

export default function Wrapper(props){  

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const logoutHandle = () => {
    dispatch(logout())
    localStorage.clear();
  }
  return (
    <View>
      <View className={!user.loggedOut ? "right" : ""}>
        {!user.loggedOut && <View className='logout'>
        <Text>{user.user.email}</Text><Text onClick={logoutHandle}>logout</Text></View>
        }
        {user.loggedOut && <Text>ToDo's</Text>}
      </View>
      {props.children}            
    </View>
  );
}