import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catid = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(catid >= 0));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => (category.id = catid)).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catid, navigation]);

  const pressHandler = item => {
    console.log(item.item);
    navigation.navigate('MealDetail', {
      id: item.id,
    });
  };

  const renderMealItem = item => (
    <MealItem
      id={item.item.id}
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
