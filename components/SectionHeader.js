import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { colors, sizes, spacing } from "../constants/theme";

const SectionHeader = ({ title, onPress, ButtonTitle = "Button" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button  title={ButtonTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight:spacing.m,
    marginLeft:spacing.l,
    marginTop: spacing.l,
    marginBottom:10
  },
  title: {
    fontSize: sizes.h3,
    fontWeight:'bold'
  },
 
});

export default SectionHeader;
