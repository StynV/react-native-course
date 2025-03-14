import { Pressable, Text, View } from 'react-native';

const CategoryGridTile = ({ title, color }) => (
  <View>
    <Pressable>
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  </View>
);

export default CategoryGridTile;
