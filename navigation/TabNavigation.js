import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/Homepage";
import SearchScreen from "../pages/searchscreen";
import FavouriteScreen from "../pages/favouritescreen";
import Icon from "../components/icons";
import { colors, sizes } from "../constants/theme";
import { StyleSheet, Animated } from "react-native";
import HomeNavigator from "../navigation/Homenavigator";

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: "Home",
    screen: HomeNavigator,
  },
  {
    name: "Search",
    screen: SearchScreen,
  },
  {
    name: "Favorite",
    screen: FavouriteScreen,
  },
];
const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          useNativeDriver: true,
          gestureEnabled:false,
          
        }}
      >
        {tabs.map(({ name, screen }, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Icon
                      icons={name}
                      size={50}
                      style={{
                        tintColor: focused ? colors.primary : colors.gray,
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    width: 10,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 30,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});

export default TabNavigator;
