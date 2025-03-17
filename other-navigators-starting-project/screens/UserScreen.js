import { View, Text, StyleSheet } from 'react-native';

const UserScreen = () => (
  <View style={styles.rootContainer}>
    <Text>
      This is the <Text style={styles.highlight}>"User"</Text> screen!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});

export default UserScreen;
