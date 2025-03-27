import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { buttonStyles } from "@/styles/common";
const GoogleAuth = () => {
  return (
    <View
      style={[]}
      className=" py-1 w-full   bg-violet-500  rounded-2xl flex-row items-center justify-center gap-4  "
    >
   <Text className="font-semibold text-white text-2xl m-0 p-0 ">
        continue with
      </Text> 
      <View className="p-1 m-0 bg-white rounded-xl border-4 border-white ">
        <Image
          source={require("@/assets/logos/g.png")}
          className="w-7 h-7 "
         
        />
      </View>
    </View>

    // <View className="border  w-24 h-24 ">
    //   <Image source={require('../../../assests/logos/g.png')}  className='w-12 h-12'/>
    //   {/* <Image source={require("../../../assests/logos/g.png")} className='w-full h-full'/> */}
    // </View>
  );
};

export default GoogleAuth;
