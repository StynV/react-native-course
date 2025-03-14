import { Text, StyleSheet, Platform } from 'react-native';

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
