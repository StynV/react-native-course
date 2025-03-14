import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';

const App = () => (
  <>
    <StatusBar style="light" />
    <CategoriesScreen />
  </>
);

const styles = StyleSheet.create({
  container: {},
});

export default App;
