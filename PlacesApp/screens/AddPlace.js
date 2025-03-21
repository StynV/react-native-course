import PlaceForm from '../components/places/PlaceForm';

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = place => {
    navigation.navigation('AllPlaces', {
      place: place,
    });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
