import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen.js';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25',
      },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
      }}
    />
  </Drawer.Navigator>
);

const App = () => (
  <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: '#3f2f25',
          },
        }}>
        <Stack.Screen
          name="Drawer"
          // component={CategoriesScreen}
          component={DrawerNavigator}
          options={{
            // title: 'All categories',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   return {
          //     title: route.params.categoryId,
          //   };
          // }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{
            title: 'About the meal',
            // headerRight: () => <Button title="Tap me!" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
