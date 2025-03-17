import 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      // initialRouteName="User"
      screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b' },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
        // drawerStyle: { backgroundColor: '#ccc' },
      }}>
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: 'Welcome Screen',
          drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
