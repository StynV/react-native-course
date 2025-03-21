// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { Text, View, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default FavoritesScreen;
