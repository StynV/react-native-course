import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>View inside of view</Text>
      </View>
      <Text style={styles.text}>Hello!</Text>
      <Button title="tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16,
  },
});
