import {
  View,
  Text,
  type ViewProps,
  Dimensions,
  useAnimatedValue,
  Modal,
  type ModalProps,
  Pressable,
  KeyboardAvoidingView,
  NativeModules,
} from "react-native";
import React, {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";
import clsx from "clsx";
import { cn } from "@/util/functions";
import Animated from "react-native-reanimated";

import InputBox from "../base/Input";
import * as NavigationBar from 'expo-navigation-bar'
import { ArrowLeft, ArrowLeftIcon } from "lucide-react-native";
interface DrawerProps extends ModalProps {
  onClose(): void;
}

const Drawer: FC<DrawerProps> = ({ children, onClose, ...props }) => {
  const { width, height } = Dimensions.get("window");
  
  const updateNavigationBar = () => {
    // console.log("running");
    // changeNavigationBarColor("white");
  };
  //
  const handleClose = () => {
    onClose();
  };
  return (
    <View>
      <Modal
        onShow={updateNavigationBar}
        transparent={true}
        visible={true}
        animationType="slide"
        onRequestClose={() => {
          onClose();
        }}
      >
        {/* <View className='h-full border w-full bg-blue-200 flex flex-col  justify-end'>
          <InputBox className="bg-red-500 " placeholder="write" />
        </View> */}

        {/* <View
          style={{
            width,
            height,

            position: 'relative',
          }}> */}
        <Pressable className="" onPress={handleClose} style={{ flex: 1 }} />
        <View
          style={{ paddingTop: 6 }}
          className="bg-white  h-[60%]  py-2 px-1"
        >
          <View className="border-t-4 w-32 mx-auto rounded-3xl "></View>

          <View className="flex  flex-row  gap-4 items-center px-2 py-1 ">
            <Pressable onPress={handleClose} className="p-1">
              <ArrowLeft color="black" width={25} height={25}/>
            </Pressable>
            <Text className="text-lg text-slate">comments</Text>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
};

export default Drawer;
