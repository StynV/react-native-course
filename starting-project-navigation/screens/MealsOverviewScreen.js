import { Text, View, StyleSheet } from 'react-native';
import {} from '../data/dummy-data';

const MealsOverviewScreen = () => (
  <View style={styles.container}>
    <Text>Meals Overview Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
