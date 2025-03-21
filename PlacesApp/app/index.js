import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllPlaces from '../screens/AllPlaces';
import AddPlace from '../screens/AddPlace';
import IconButton from '../components/UI/IconButton';
import { Colors } from '../constants/colors';
import Map from '../screens/Map';
import { useEffect, useState } from 'react';
import { init } from '../util/database';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function Page() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch(err => console.log(err));
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />

      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 },
        }}>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => ({
            title: 'Your favorite places',
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                size={32}
                color={tintColor}
                onPress={() => navigation.navigate('AddPlace')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{
            title: 'Add a new place',
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            title: 'Map',
          }}
        />
      </Stack.Navigator>
    </>
  );
}
