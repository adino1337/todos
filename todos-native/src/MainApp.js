import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';  
import TodoApp from './screens/TodoApp'
import Wrapper from './components/Wrapper'
import LogScreen from './screens/LogScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect } from 'react';
import {setUser} from './features/userSlice'

export default function MainApp() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  
/*
  useEffect(() => {
    (async() => {
    const userL = JSON.parse(await AsyncStorage.getItem("user"))
    if(userL)
      dispatch(setUser(userL));
     
  })()      
}, [])*/
  return (
    <SafeAreaView >
      <Wrapper>
      {user.loggedOut ? <LogScreen/> : <TodoApp/>}
      </Wrapper>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

