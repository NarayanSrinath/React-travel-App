import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import { setItem } from "../utiltes/aysncStorage";

const { height, width } = Dimensions.get("window");
export default function OnboardingPage() {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("welcome");
    setItem("onBoarded", "1");
  };
  const handleSkip = () => {
    navigation.navigate("welcome");
    setItem("onBoarded", "1");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity
        {...props}
        className="rounded-md bg-slate-600 h-12 w-12 items-center py-4 mr-2"
      >
        <Text className="text-2l">Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleSkip}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "rgb(203 213 225)",
            image: (
              <View>
                <Lottie
                  style={styles.lottie}
                  source={require("../assets/animation/onboarding1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Explore. Dream. Discover",
            subtitle:
              "Because There’s a Whole World Outside Your Office Window.",
          },
          {
            backgroundColor: "rgb(254 226 226)",
            image: (
              <View>
                <Lottie
                  style={styles.lottie}
                  source={require("../assets/animation/onboarding3.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Your Journey, Our Passion.",
            titleStyles: { className: "bg-neutral-950" },
            subtitle: "Where the Journey Matters More than The Destination.",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View>
                <Lottie
                  style={styles.lottie}
                  source={require("../assets/animation/onboarding2.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Explore More, Experience More",

            subtitle: "Travel: The Best Way to Be Lost and Found All at Once.",
          },
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
