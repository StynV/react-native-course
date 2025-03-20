import { Image, Pressable, Text, View, StyleSheet } from 'react-native';

const PlaceItem = ({ place }) => (
  <Pressable>
    <Image source={{ uri: place.imageUri }} />
    <View>
      <Text>{place.title}</Text>
      <Text>{place.address}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({});

export default PlaceItem;
