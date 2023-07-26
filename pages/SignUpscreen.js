import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function SignUpscreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-rose-100">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="bg-red-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2"
          >
            <Icon name="arrowleft" size={25} color="#000"></Icon>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-2">
          <Image
            style={{ height: 110, width: 165 }}
            source={require("../assets/images/signup.png")}
          ></Image>
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-rose-300 px-8 mt-8"
        style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
      >
        <View className=" form space-y-2">
          <Text className="text-slate-950 text-lg mt-10 text-gray-700 ">
            Username
          </Text>
          <TextInput
            className="p-4 bg-rose-100 text-gray-700 rounded-2xl mb-2"
            value="xyz@gmail.com"
            placeholder="Username"
          />
          <Text className="text-slate-950 text-lg mt-10 text-gray-700 ">
            Password
          </Text>
          <TextInput
            className="p-4 bg-rose-100 text-gray-700 rounded-2xl mb-2"
            value="password"
            secureTextEntry
            placeholder="Password"
          />
          <Text className="text-slate-950 text-lg mt-10 text-gray-700 ">
            Repeat Password
          </Text>
          <TextInput
            className="p-4 bg-rose-100 text-gray-700 rounded-2xl mb-5"
            value="password"
            secureTextEntry
            placeholder="Password"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            className="py-3 bg-rose-100 rounded-xl "
          >
            <Text className=" text-lg text-gray-700 font-bold text-center ">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text className=" text-lg text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-10 ">
          <TouchableOpacity className="p-2 bg-rose-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-rose-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-rose-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-8">
          <Text className="text-black font-semibold text-base">
            Already have a account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text className="text-red-100 font-semibold text-base"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
