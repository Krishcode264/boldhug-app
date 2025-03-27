import { View, Text, Image, ImageBackground } from "react-native";
import React, { type Dispatch, type SetStateAction } from "react";

import { ScrollView } from "react-native";

import { assertEasingIsWorklet } from "react-native-reanimated/lib/typescript/animation/util";
import Button from "@/components/base/Button";
import { Navigation, X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { MediaItem, useMediaViewerState } from "@/store/chatStore";
import { ImagePickerAsset, MediaType } from "expo-image-picker";

type MessageInputMediaAttachmentProps = {
  assets: ImagePickerAsset[];
  setAttachments: Dispatch<SetStateAction<ImagePickerAsset[]>>;
};
const MessageInputMediaAttachment = ({
  assets,
  setAttachments,
}: MessageInputMediaAttachmentProps) => {
  const router = useRouter();
  const { setMediaList } = useMediaViewerState();
  const removeAttachedFile = (fileName: string) => {
    setAttachments((prev) =>
      prev.filter((file) => !(file.fileName === fileName))
    );
  };

  const getMediaViewType = (asset: ImagePickerAsset[]): MediaItem[] => {
    return asset.map((s) => ({
      uri: s.uri,
      type: s.type || "image",
    }));
  };

  const navigateToCompleteView = (index: number,item:MediaItem) => {
    setMediaList([item]);
    router.push({
      pathname: "(single)/media-viewer",
      params: {
        index,
      },
    });
    // Navigator.navigate('MediaViewer',{mediaList:assets});
  };

  return (
    <ScrollView
      contentContainerStyle={{ gap: 5 }}
      className="w-full    flex flex-row  space-x-2"
      horizontal={true}
      scrollEnabled={true}
    >
      {assets.map((asset: ImagePickerAsset) => {
        return (
          <Button
            onPress={() =>
              navigateToCompleteView(
                assets.findIndex((item) => item.fileName === asset.fileName),
                {uri:asset.uri,type:asset.type as string}
              )
            }
            className=" h-20 m-0 p-0  rounded-xl"
            key={asset.fileName}
          >
            <ImageBackground
              className="h-full w-20 rounded-xl  relative"
              resizeMode="cover"
              source={{ uri: asset.uri }}
            >
              <Button
                onPress={() => removeAttachedFile(asset.fileName as string)}
                className="absolute p-0  m-0 right-0 bg-violet-600"
              >
                <X className=" " size={20} color={"white"} />
              </Button>
            </ImageBackground>
          </Button>
        );
      })}
    </ScrollView>
  );
};

export default MessageInputMediaAttachment;
