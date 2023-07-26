import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { sizes, spacing, colors, shadow } from "../constants/theme";
import FavButton from "./Favbutton";
const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HIGHT = 220;
const TripList = ({ list }) => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity style={styles.cardcontainer}>
            <View style={[styles.card, shadow.light]} key={item.id}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View style={styles.footer}>
                <View style={styles.titlebox}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.locationText}>{item.location}</Text>
                </View>
                <FavButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardcontainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HIGHT - 60,
    resizeMode: "cover",
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HIGHT - 60,
    borderTopRightRadius: sizes.radius,
    borderTopLeftRadius: sizes.radius,
    overflow: "hidden",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginRight: 10,
    marginLeft: 10,
  },
  titlebox: {
    flex: 1,
  },
  titleText: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },
  locationText: {
    fontSize: sizes.body,

    color: colors.lightGray,
  },
});

export default TripList;
