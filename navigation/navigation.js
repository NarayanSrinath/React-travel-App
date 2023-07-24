import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import React, { useEffect, useState } from "react";
import HomePage from "../pages/Homepage";
import OnboardingPage from "../pages/Onboardingpage";
import { getItem } from "../utiltes/aysncStorage";

export default function Navigation() {
  const [showonBoarding, setShowOnboarding] = useState(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  checkIfAlreadyOnboarded = async () => {
    let onBoarded = await getItem("onBoarded");
    if (onBoarded == 1) {
      //hide on Boarding
      setShowOnboarding(false);
    } else {
      //show on boarding
      setShowOnboarding(true);
    }
  };

  if (showonBoarding == null) {
    return null;
  }

  if (showonBoarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="onBoard"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="onBoard" component={OnboardingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="onBoard" component={OnboardingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
