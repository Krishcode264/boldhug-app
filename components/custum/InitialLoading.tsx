import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { LoaderPinwheelIcon } from "lucide-react-native";
import BoldHug from "@/assets/logos/BoldHug.svg";
import { StatusBar } from "expo-status-bar";
import Icon from "../base/Icon";

const InitialLoading = () => {
  return (
    <SafeAreaView className="h-full w-full flex justify-center items-center p-4 ">
        <StatusBar backgroundColor="white"/>
        <View className="w-full  flex-1">
        <BoldHug />
        </View>
        <View className="w-full  flex-1 flex items-center ">
            <Icon className="">
            <LoaderPinwheelIcon  size={60} color={"violet"} className="" />
            </Icon>
      
        </View>
      
    </SafeAreaView>
  );
};

export default InitialLoading;
