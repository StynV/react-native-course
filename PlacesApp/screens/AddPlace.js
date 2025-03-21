import { useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import PlaceForm from '../components/places/PlaceForm';
import { insertPlace } from '../util/database';

const AddPlace = ({ navigation }) => {
  const route = useRoute();
  const pickedLocation = route.params
    ? { lat: route.params.pickedLat, lng: route.params.pickedLng }
    : null;

  const createPlaceHandler = useCallback(
    async place => {
      await insertPlace(place);
      navigation.navigate('AllPlaces', {
        //  place
      });
    },
    [navigation],
  );

  return <PlaceForm onCreatePlace={createPlaceHandler} pickedLocation={pickedLocation} />;
};

export default AddPlace;
