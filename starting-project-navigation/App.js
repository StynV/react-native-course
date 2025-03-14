import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

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
          name="MealsCategories"
          component={CategoriesScreen}
          options={{ title: 'All categories' }}
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
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

const styles = StyleSheet.create({
  container: {},
});

export default App;
