import { Text, View, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ item, onDeleteItem }) => (
  <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: '#dddddd' }}
      onPress={onDeleteItem.bind(this, item)}
      style={({ pressed }) => {
        pressed && styles.pressedItem;
      }}>
      <Text style={styles.goalText}>{item.item.text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;
