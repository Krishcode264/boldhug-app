import { View, Text, Pressable } from "react-native";
import React from "react";
import ProfileIcon from "../../../assests/icons/profile.svg";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { UserProfile as User } from "@/constants/Types";
import { MenuIcon, MoreHorizontal, MoreVertical } from "lucide-react-native";
import Button from "@/components/base/Button";
import { UserprofileData } from "@/db/user";
import { useRouter } from "expo-router";

const ChatListItem = ({ name, profilePhoto }: User) => {
  const navigation = useNavigation();
  const router = useRouter();
  const handleNavigation = () => {
   // console.log("is this ruuning ")
    router.push({
      pathname: "(chat)/chat-view",
      params: {
        name,
        profilePhoto
      },
    });
  };
  return (
    <Pressable
      onPress={handleNavigation}
      className="w-full  gap-2   bg-white  flex flex-row rounded-xl items-center py-2 px-3   active:bg-slate-50 "
    >
      <Image
        source={{ uri: profilePhoto }}
        className="  rounded-full w-12 h-12 bg-contain"
      />

      <View className="flex flex-col ">
        <Text className="text-lg font-medium text-slate-600">{name}</Text>
        <Text className="text-[12px] text-slate-600">
          hey, how are you doing
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;
