import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../constants/styles';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AuthContextProvider, { AuthContext } from '../store/auth-context';
import { useContext } from 'react';
import IconButton from '../components/ui/IconButton';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton icon="exit" color={tintColor} size={24} onPress={authCtx.logout} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: Colors.primary100 },
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return !authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />;
};

export default function Page() {
  return (
    <>
      <StatusBar style="dark" />

      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
