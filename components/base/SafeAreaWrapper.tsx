import { View, Text, SafeAreaView } from "react-native";
import React, { ReactNode } from "react";
import { StatusBar } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import clsx from "clsx";

interface SafeAreaWrapperType extends SafeAreaViewProps{

}
const SafeAreaWrapper:React.FC<SafeAreaWrapperType> = ({ children ,className,...props}) => {
  return (
    <SafeAreaView style={{marginTop:StatusBar.currentHeight}}  className={clsx(" ",className)} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
