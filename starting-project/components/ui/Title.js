import { Text, StyleSheet } from 'react-native';

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});

export default Title;
