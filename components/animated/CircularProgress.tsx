import React from "react";
import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-svg-circular-progress";

const CustomCircularProgress = ({ progress }:{progress:number}) => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <AnimatedCircularProgress
        size={100}
        width={8}
        fill={progress * 100} // Convert 0-1 to 0-100
        tintColor="#6200ee"
        backgroundColor="#ddd"
      />
    </View>
  );
};

export default CustomCircularProgress;
