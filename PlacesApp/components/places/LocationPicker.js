import { View, StyleSheet, Alert, Image, Text } from 'react-native';
import OutlinedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { useEffect, useState } from 'react';
import { getAddress, getMapPreview } from '../../util/location';
import { useNavigation } from 'expo-router';
import { useIsFocused, useRoute } from '@react-navigation/native';

const LocationPicker = ({ onPickLocation, pickedLocation }) => {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [pickedLoc, setPickedLoc] = useState(pickedLocation);
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params?.pickedLat && route.params?.pickedLng) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLoc(mapPickedLocation);
      onPickLocation(mapPickedLocation);
    }
  }, [isFocused, route, onPickLocation]);

  useEffect(() => {
    if (pickedLocation) {
      setPickedLoc(pickedLocation);
    }
  }, [pickedLocation]);

  const verifyPermissions = async () => {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permissions',
        'You need to grant location permissions to use this app',
      );
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLoc({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    onPickLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  };

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLoc) {
    locationPreview = (
      <Image
        source={{ uri: getMapPreview(pickedLoc.lat, pickedLoc.lng) }}
        style={styles.mapPreviewImage}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate user
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mapPreviewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});

export default LocationPicker;
