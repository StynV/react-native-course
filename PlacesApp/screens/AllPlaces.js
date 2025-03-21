import { useIsFocused } from '@react-navigation/native';
import PlacesList from '../components/places/PlacesList';
import { useEffect, useState } from 'react';
import { fetchPlaces } from '../util/database';

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    };

    if (isFocused && route.params) {
      loadPlaces();
      // setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
