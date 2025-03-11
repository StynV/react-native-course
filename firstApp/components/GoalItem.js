import { Text, View, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ item, onDeleteItem }) => (
  <Pressable onPress={onDeleteItem.bind(this, item)}>
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.item.text}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
