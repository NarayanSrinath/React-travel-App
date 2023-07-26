import { TouchableOpacity, Image } from "react-native";
import icon from "../constants/icon";

const Icon = ({ onPress, icons, style, size = 32 }) => {
  const image = (
    <Image
      source={icon[icons]}
      style={[{ width: size, height: size, resizeMode: "cover" }, style]}
    />
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
  }
  return image;
};

export default Icon;
