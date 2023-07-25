import MainApp from './src/MainApp'
import { Provider } from 'react-redux';
import store from './src/app/store'
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <MainApp />
      </SafeAreaView>
    </Provider>
  );
}