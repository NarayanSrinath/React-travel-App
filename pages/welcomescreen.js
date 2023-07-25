import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../utiltes/aysncStorage";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Lottie from "lottie-react-native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const handleReset = async () => {
    await removeItem("onBoarded");
    navigation.push("onBoard");
  };
  return (
    <SafeAreaView className="flex-1 bg-pink-100">
      <View className="flex flex-row-reverse px-4 mt-2 ">
        <TouchableOpacity onPress={handleReset} className="justify-items-end">
          <Icon name="logout" size={25} color="#000"></Icon>
        </TouchableOpacity>
      </View>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-black font-semibold text-2xl text-center">
          “The journey of a thousand miles begins with a single step.”
        </Text>
        <View className="justify-center py-8">
          <Lottie
            className="h-96 w-64"
            source={require("../assets/animation/welcome.json")}
            autoPlay
            loop
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup");
            }}
            className="py-3 bg-rose-200 mx-8 rounded"
          >
            <Text className="text-black font-semibold text-lg text-center">
              Sign up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-black font-semibold text-base">
              Already have a account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              <Text className="text-red-300 font-semibold text-base">
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
