import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route }) => {
  const displayedMeals = MEALS.filter(mealItem =>
    mealItem.categoryIds.indexOf(route.params.categoryId >= 0),
  );

  const renderMealItem = item => (
    <MealItem
      title={item.item.title}
      imageUrl={item.item.imageUrl}
      duration={item.item.duration}
      complexity={item.item.complexity}
      affordability={item.item.affordability}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
