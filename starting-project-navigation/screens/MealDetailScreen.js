import { Text, View } from 'react-native';

const MealDetailScreen = ({ route }) => {
  return (
    <View>
      <Text>Meal {route.params.mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;
