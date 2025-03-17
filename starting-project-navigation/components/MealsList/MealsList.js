import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ items }) => {
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
      <FlatList data={items} keyExtractor={item => item.id} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
