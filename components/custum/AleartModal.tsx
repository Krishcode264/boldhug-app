import { Dispatch, SetStateAction, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";

import { PanelTopCloseIcon, RotateCcw, X } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { modalStyles } from "@/styles/common";
import Button from "../base/Button";
import { router } from "expo-router";

export type AlertModalProps = {
  alert: string;
  onclose?: () => void;
  setVisible: Dispatch<SetStateAction<any>>;
  handler: () => Promise<void>;
};
export default function AleartModal({
  alert,
  setVisible,
  handler,
}: AlertModalProps) {

    
  return (
    <View className="">
      <Modal
        onShow={() => {}}
        transparent={true}
        visible={true}
        animationType="slide"
        onRequestClose={() => {}}
        className=""
      >
        <Pressable className="" style={{ flex: 1 }} />
        <View
          style={{ paddingTop: 1, flex: 1 }}
          className="bg-violet-500 rounded-xl mx-auto w-[90%] flex justify-around gap-4 p-2"
        >
          <Text className="text-center font-semibold text-xl text-white">
            {alert}
          </Text>
          <View className="flex flex-row  items-center ">
          <Button
              onPress={() => {
                setVisible({message:"",show:false});
                  
                  
              }}
              className="mx-auto  flex-[0.4] bg-gray-400"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Text className="text-center text-xl text-white font-semibold ">
                go back
              </Text>
            </Button>
            <Button
              onPress={() => {
                setVisible({message:"",show:false});

               handler();
              }}
              className="mx-auto  flex-[0.4] bg-gray-400"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Text className="text-center text-xl text-white font-semibold ">
                continue
              </Text>
            </Button>
          
          </View>
        </View>
        <Pressable className="" style={{ flex: 1 }} />
      </Modal>
    </View>
  );
}
