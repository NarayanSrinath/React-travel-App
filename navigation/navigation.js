import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import React, { useEffect, useState } from "react";
import HomePage from "../pages/Homepage";
import OnboardingPage from "../pages/Onboardingpage";
import { getItem } from "../utiltes/aysncStorage";

import LoginScreen from "../pages/LoginScreen";
import SignUpscreen from "../pages/SignUpscreen";
import WelcomeScreen from "../pages/welcomescreen";
import TabNavigator from "./TabNavigation";
import { StatusBar } from "react-native";

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
        <StatusBar hidden />
        <Stack.Navigator
          initialRouteName="onBoard"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name="onBoard" component={OnboardingPage} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignUpscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name="onBoard" component={OnboardingPage} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignUpscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
