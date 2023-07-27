import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { shadow, sizes, spacing, colors } from "../constants/theme";
import FavButton from "./Favbutton";
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from "@react-navigation/native";
const CARD_WIDTH = sizes.width - 80;
const CARD_HIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;
const TopPlacesCarousal = ({ list }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={list}
      horizontal
      showsHorizontalScrollIndicator="false"
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => { navigation.navigate('details', { trip: item }) }}
            style={{
              marginLeft: spacing.l,
              marginRight: index == list.length - 1 ? spacing.l : 0,
            }}
          >
            <View style={[styles.card, shadow.dark]}>
              <FavButton style={styles.fav} />

              <SharedElement
                id={`trip.${item.id}.image`}
                style={StyleSheet.absoluteFillObject}>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
              </SharedElement>
              <View style={styles.titlebox}>
                <Text style={styles.title}>
                  {item.title}
                </Text>
                <Text style={styles.location}>
                  {item.location}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HIGHT,
    marginVertical: 10,
    backgroundColor:colors.white,
    borderRadius:sizes.radius,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HIGHT,
    resizeMode: "cover",
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HIGHT,
    borderRadius: sizes.radius,
    overflow: "hidden",
  },
  titlebox: {
    position: 'absolute',
    top: CARD_HIGHT - 80,
    left: 16
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.white
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white
  },
  fav: {
    position: 'absolute',
    top: spacing.m,
    right: spacing.m,
    zIndex: 1
  }
});
export default TopPlacesCarousal;
