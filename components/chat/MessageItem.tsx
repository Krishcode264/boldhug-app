import {
  View,
  Text,
  Pressable,
  type ViewProps,
  TouchableWithoutFeedback,
} from "react-native";
import React, { type FC } from "react";
import { Image } from "react-native";
import Button from "@/components/base/Button";
import clsx from "clsx";
import type { Attachment, Message, RepliedTo } from "@/constants/Types";
import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "@/components/custum/VideoPlayer";
import { cn } from "@/util/functions";
import type { StyleProp, StyleSheetProperties, ViewStyle } from "react-native";
import type { ReactVideoProps, VideoRef } from "react-native-video";
import { withDecay } from "react-native-reanimated";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useMediaViewerState } from "@/store/chatStore";
interface AttachmentsProps extends ViewProps {
  attachments: Attachment[];
  videoStyles?: StyleProp<ViewStyle>;
  videoProps?: ReactVideoProps;
  videoClassName?: string;
}

type ImageElementProps = {
  url: string;
};

export const MediaAttachment: FC<AttachmentsProps> = ({
  className,
  attachments,
  videoStyles,
  videoClassName,
  videoProps,
  ...props
}) => {

  const router = useRouter();
  const {setMediaList}=useMediaViewerState()
  const ImageElement = ({ url }: ImageElementProps) => {
    return (
      <Image className=" w-[100%] h-56  rounded-sm p-1" source={{ uri: url }} />
    );
  };
  const handleMediaViewNavigation = (index:number) => {
     setMediaList(attachments)
    router.push({
      pathname: "(single)/media-viewer",
      params: {
        index
      },
    });
  };

  return (
    <View
      className={cn(className, "flex flex-row w-[200%] overflow-x-auto")}
      {...props}
    >
      {attachments.map((item,index) => {
        if (item.type === "image")
          return (
            <Button
              className="flex-1"
              onPress={()=>handleMediaViewNavigation(index)}
              key={item.url + Math.random() * 123958}
            >
              <ImageElement url={item.url} />
            </Button>
          );

        if (item.type === "video") {
          return (
            <>
              <VideoPlayer
                key={item.url + Math.random() * 123}
                className={cn(videoClassName + "")}
                videoStyles={videoStyles}
                uri={item.url}
              />
            </>
          );
        }
      })}
    </View>
  );
};

type ReplyingToProps = {
  replied: RepliedTo;
};
const ReplyingTo: FC<ReplyingToProps> = ({ replied }) => {
  return (
    <View className="rounded-md h-14 bg-violet-200 p-1 flex-row items-center justify-between  ">
      <View className="flex flex-col">
        <Text className="text-slate-600">{replied.username}</Text>

        <Text className="text-sm text-slate-500">
          {replied.text?.slice(0, 30)}..
        </Text>
      </View>
      {replied.attachment && replied.attachment.url && (
        <Image
          className="w-12 h-12    rounded-md "
          source={{ uri: replied.attachment.url }}
        />
      )}
    </View>
  );
};

type MessageItemProps = {
  msg: Message;
};
const MessageItem: FC<MessageItemProps> = ({ msg }) => {
  return (
    <View
      className={clsx(
        " w-[70%] bg-violet-50 py-1     px-1 rounded-2xl  mb-2 ",
        {
          "self-end": !msg.repliedTo,
          "self-start": msg.repliedTo,
        }
      )}
    >
      <View className="flex flex-col w-full">
        {msg.repliedTo && <ReplyingTo replied={msg.repliedTo} />}
        {msg.attachments && msg.attachments.length > 0 && (
          <MediaAttachment
            videoStyles={{ width: 250 }}
            attachments={msg.attachments}
          />
        )}
        <Text className=" text-lg   text-slate-700">{msg.text}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
