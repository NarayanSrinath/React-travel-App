import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../utiltes/aysncStorage";

export default function HomePage() {
  const navigation = useNavigation();
  const handleReset = async () => {
    await removeItem("onBoarded");
    navigation.push("onBoard");
  };
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-slate-300">
      <Text className="text-2xl">Home page</Text>
      <TouchableOpacity onPress={handleReset}>
        <Text className="text-2xl p-2 text-rose-400">Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
