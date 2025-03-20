const API_KEY = 'AIzaSyBU1UspouZtVsQt8fAs9fmP5TFKWv-3_Vc';

export const getMapPreview = ({ latitude, longitude }) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x300&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${latitude},${longitude}
    &key=${API_KEY}`;
  return imagePreviewUrl;
};
