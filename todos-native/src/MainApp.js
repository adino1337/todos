import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';  
import TodoApp from './screens/TodoApp'
import Wrapper from './components/Wrapper'
import LogScreen from './screens/LogScreen'
export default function MainApp() {
  const user = useSelector(state => state.user)

  return (
    <SafeAreaView >
      <Wrapper>
      {user.loggedOut ? <LogScreen/> : <TodoApp/>}
      </Wrapper>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

