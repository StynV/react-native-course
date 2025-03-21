import { useCallback, useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../UI/Button';
import Place from '../../models/place';

const PlaceForm = ({ onCreatePlace, pickedLocation }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [location, setLocation] = useState(pickedLocation);

  useEffect(() => {
    if (pickedLocation) {
      setLocation(pickedLocation);
    }
  }, [pickedLocation]);

  const changeTitleHandler = enteredText => {
    setEnteredTitle(enteredText);
  };

  const takeImageHandler = imageUri => {
    setSelectedImage(imageUri);
  };

  const pickLocationHandler = useCallback(location => {
    setLocation(location);
  }, []);

  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, selectedImage, location);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
      </View>

      <ImagePicker onTakeImage={takeImageHandler} />

      <LocationPicker onPickLocation={pickLocationHandler} pickedLocation={location} />

      <Button onPress={savePlaceHandler}>Add place</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 24,
    color: Colors.primary500,
  },
  input: {
    marginBottom: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

export default PlaceForm;
