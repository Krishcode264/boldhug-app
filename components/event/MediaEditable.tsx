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
import AleartModal from "../custum/AleartModal";
import { Trash2 } from "lucide-react-native";

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

type EditableProps = {
  url: string;
  type: string;
  remove:(fileName: string) => void;
  fileName: string;
};
const MediaEditable: React.FC<EditableProps> = ({ url: uri, type,remove,fileName }) => {
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
        onLongPress={() => console.log("long pressed ")}
        onPress={handleMediaViewNavigation}
        key={uri + Math.random() * 123}
      >
         
        <ImageElement url={uri} />
        <Button onPress={()=>remove(fileName)} style={{bottom:6,right:7}} className="absolute    h-12    bg-white rounded-lg flex items-center justify-center ">
          <Trash2 color="red" size={25} />
        </Button>
      </Button>
    );

  if (type === "video") {
    return (
      <View
        style={{ height: 300 }}
        className=" w-screen h-[30] rounded-md p-4   m-auto"
      >
        <VideoPlayer key={uri + Math.random() * 123} uri={uri} type={"video"} />
        <Button onPress={()=>remove(fileName)} style={{bottom:6,right:7}} className="absolute    h-12    bg-white rounded-lg flex items-center justify-center ">
          <Trash2 color="red" size={25} />
        </Button>
      </View>
    );
  }
};

export default MediaEditable;
