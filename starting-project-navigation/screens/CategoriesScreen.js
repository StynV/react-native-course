import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const renderCategoryItem = item => (
  <CategoryGridTile title={item.item.title} color={item.item.color} />
);

const CategoriesScreen = () => (
  <FlatList
    data={CATEGORIES}
    keyExtractor={item => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
  />
);

export default CategoriesScreen;
