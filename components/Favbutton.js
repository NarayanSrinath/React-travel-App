import React from "react";
import { View } from "react-native";
import { colors, shadow } from "../constants/theme";
import Icon from "../components/icons";
const FavButton = ({ active, style }) => {
  return (
    <View
      style={[
        { backgroundColor: colors.white, padding: 4, borderRadius: 10 },
        style,
        shadow.light,
      ]}
    >
      <Icon icons={active ? "FavoriteFilled" : "Favorite"} size={24} />
    </View>
  );
};
export default FavButton;
