import { FlatList, Text, StyleSheet, View } from 'react-native';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';
import { useNavigation } from 'expo-router';

const PlacesList = ({ places }) => {
  const navigation = useNavigation();

  const selectPlaceHandler = id => {
    navigation.navigate('PlaceDetails', {
      placeId: id,
    });
  };

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallBackText}>No places added yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={item => item.id}
      renderItem={item => <PlaceItem place={item} onSelect={selectPlaceHandler} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallBackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

export default PlacesList;
