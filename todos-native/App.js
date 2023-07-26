import MainApp from './src/MainApp'
import { Provider } from 'react-redux';
import store from './src/app/store'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <MainApp />
      </SafeAreaView>
    </Provider>
  );
}