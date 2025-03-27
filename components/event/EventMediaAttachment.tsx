import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  useWindowDimensions,
  View,
  type StyleProp,
  type ViewProps,
  type ViewStyle,
} from "react-native";
import { cn } from "@/util/functions";
import VideoPlayer from "@/components/custum/VideoPlayer";
import type { ReactVideoProps } from "react-native-video";
import type { Attachment } from "@/components/event/EventPost";
import Button from "@/components/base/Button";
import { preStyles as styles } from "@/styles/common";
import { StyleSheet } from "nativewind";
import { useRouter } from "expo-router";
import { useMediaViewerState } from "@/store/chatStore";
import { Delete, LucidePaintBucket, Trash2 } from "lucide-react-native";

interface AttachmentsProps extends ViewProps {
  attachments: Attachment[];
  videoStyles?: StyleProp<ViewStyle>;
  videoProps?: ReactVideoProps;
  videoClassName?: string;
}

type ImageElementProps = {
  url: string;
};
export interface MediaItemProps {
  uri: string;
  type: "image" | "video" | "other";
}



const EventMediaAttachment: React.FC<Attachment> = ({url:uri,type}) => {
  const { setMediaList } = useMediaViewerState();
  const router = useRouter();
  const ImageElement = ({ url }: ImageElementProps) => {
    return (
      <Image
        style={styles.mediaAttachmentItem}
        className="  h-64 rounded-md p-1"
        source={{ uri: url }}
      />
    );
  };
  const handleMediaViewNavigation = () => {
    setMediaList([{ uri, type }]);
    router.push({
      pathname: "(single)/media-viewer",
    });
  
  };

  if (type === "image")
    return (
      <Button
       onLongPress={()=>console.log("long pressed ")}
        onPress={handleMediaViewNavigation}
        key={uri + Math.random() * 123}
      >
        <ImageElement url={uri} />
  
      
      </Button>
    );

  if (type === "video") {
    return (
      <View style={{height:300}} className=" w-screen h-[30] rounded-md p-4   m-auto">
        <VideoPlayer key={uri + Math.random() * 123} uri={uri} type={"video"} />
      
      </View>
    );
  }
};

export default EventMediaAttachment;
