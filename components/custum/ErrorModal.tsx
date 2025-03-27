import { Dispatch, SetStateAction, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";

import { PanelTopCloseIcon, RotateCcw, X } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { modalStyles } from "@/styles/common";
import Button from "../base/Button";

export type ErrorModalProps = {
  error: string;
  onclose?: () => void;
  retry?: () => void;
  shouldRetry: boolean;
  setVisible: Dispatch<SetStateAction<any>>;
};
export default function ErrorModal({
  error,
  onclose,
  retry,
  shouldRetry,
  setVisible,
}: ErrorModalProps) {
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
        <Pressable className="" onPress={onclose} style={{ flex: 1 }} />
        <View
          style={{ paddingTop: 1, flex: 1 }}
          className="bg-red-500 rounded-xl mx-auto w-[90%] flex justify-around gap-4 p-2"
        >
          <Text className="text-center font-semibold text-xl text-white">
            {error || "somethig went wrong try again"}
          </Text>
          <View className="flex flex-row  items-center ">
            
            <Button onPress={()=>setVisible(false)} className="mx-auto  w-24 bg-gray-400" style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}>
                <Text className="text-center text-white font-semibold ">
                    close
                </Text>
             </Button>
            {
              shouldRetry && 
                  <Button onPress={retry} style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}} className="mx-auto w-24  bg-black flex items-center flex-row gap-4 justify-center">

                  <Text className="text-center text-white font-semibold ">
                      retry
                  </Text>
                  {/* <RotateCcw size={16} color={"white"}/> */}
               </Button>
            }
          </View>
        </View>
        <Pressable className="" onPress={onclose} style={{ flex: 1 }} />
      </Modal>
    </View>
  );
}
