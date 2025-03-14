import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = item => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.item.id,
      });
    };

    return (
      <CategoryGridTile title={item.item.title} color={item.item.color} onPress={pressHandler} />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
