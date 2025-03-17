import 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="User">
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="User" component={UserScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
