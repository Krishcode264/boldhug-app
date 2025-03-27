import { View, Text, Dimensions, StatusBar } from "react-native";
import React, { FC, useEffect } from "react";
import { Image } from "react-native";
import { FlatList } from "react-native";

import VideoPlayer from "@/components/custum/VideoPlayer";
import { useLocalSearchParams } from "expo-router";
import { MediaItem, useMediaViewerState } from "@/store/chatStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImagePickerAsset } from "expo-image-picker";

const MessageMediaViewer = ({}) => {
  const { index } = useLocalSearchParams();
  const { mediaList } = useMediaViewerState();

  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    return () => {
      console.log("return returning ");
    };
  });
  return (
    <SafeAreaView className=" w-full h-full p-1 rounded-md ">
      <StatusBar backgroundColor="white" />
  
      <FlatList
      className="flex-1"
        data={mediaList}
        contentContainerClassName="gap-4 my-auto "
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => {
       //   console.log(item);
          if (item.type === "image" || item.type.startsWith("image")) {
            return (
              <Image
                style={{ height: height-70, width, borderRadius: 20 }}
                className="  rounded-md  mb-4 "
                source={{ uri: item.uri || item.url }}
              />
            );
          }

          if (item.type == "video" || item.type.startsWith("video")) {
          //  console.log("itrms, ", item);
            return (
              <View className="w-full h-full">
                <VideoPlayer
                  
                  type="video"
                  uri={item.uri || (item.url as string)}
                />
              </View>
            );
          }
          return null;
        }}
      />
    </SafeAreaView>
  );
};

export default MessageMediaViewer;
