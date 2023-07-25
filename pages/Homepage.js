import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../utiltes/aysncStorage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1  bg-slate-300">
      <View className="flex flex-row px-4 mt-2 ">
        <TouchableOpacity className="justify-items-end">
          <Icon name="menu-open" size={30} color="#000"></Icon>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
