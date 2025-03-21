import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import { fetchPlaceDetails } from '../util/database';

const PlaceDetails = ({ route, navigation }) => {
  const [place, setPlace] = useState();
  const showOnMapHandler = () => {};

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    const loadPlaceData = async () => {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    };

    loadPlaceData();
  }, [navigation, selectedPlaceId]);

  if (!place) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image src={place.imageUri} style={styles.image} />

      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>

        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PlaceDetails;
