import React from "react";

import { Text, View, StyleSheet, ScrollView } from "react-native";
import MainHeader from "../components/MainHeader";
import { colors } from "../constants/theme";
import ScreenHeader from "../components/Screenheader";
import TopPlacesCarousal from "../components/TopPlacesCarousel";
import { PLACES, TOP_PLACES } from "../data";
import SectionHeader from "../components/SectionHeader";
import TripList from "../components/Triplist";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Traveling" />
      <ScreenHeader mainTitle="Find your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousal list={TOP_PLACES} />
        <SectionHeader
          title="Popular Places"
          ButtonTitle="See All"
          onPress={() => {}}
        />
        <TripList list={PLACES} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});
export default HomePage;
