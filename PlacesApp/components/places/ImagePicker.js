import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Alert, Button, View } from 'react-native';

const ImagePicker = () => {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permissions',
        'You need to grant camera permissions to use this app',
      );

      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(image);
  };

  return (
    <View>
      <View></View>

      <Button title="Take image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;
