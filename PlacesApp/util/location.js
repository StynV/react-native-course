const API_KEY = 'AIzaSyBU1UspouZtVsQt8fAs9fmP5TFKWv-3_Vc';

export const getMapPreview = ({ latitude, longitude }) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x300&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${latitude},${longitude}
    &key=${API_KEY}`;
  return imagePreviewUrl;
};

export const getAddress = async (latitude, longitude) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/geocode?latlng=${latitude},${longitude}&key=${API_KEY}`;

  // eslint-disable-next-line no-undef
  const result = await fetch(imagePreviewUrl);

  if (!result.ok) {
    throw new Error('Failed to fetch address');
  }

  const data = await result.json();
  return data.results[0].formatted_address;
};
