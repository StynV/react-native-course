import { Text, View, StyleSheet } from 'react-native';

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => (
  <View style={[styles.details, style]}>
    <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
    <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
    <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
  </View>
);

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});

export default MealDetails;
