import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, sizes, spacing } from "../constants/theme";
import Icon from "../components/icons";
const MainHeader = ({ title }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Icon icons="Hamburger"size={40} onPress={()=>{}} ></Icon>
      <Text style={styles.title}>{title}</Text>
      <Icon icons="Notification" size={40} onPress={()=>{}}></Icon>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal:spacing.l
  },
  title: {
    fontSize:sizes.h3,
    fontWeight:'bold'
  },
});
export default MainHeader;
