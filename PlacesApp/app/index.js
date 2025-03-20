import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

export default function Page() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
