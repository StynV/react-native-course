import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
