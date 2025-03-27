import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import {
  useNavigation,
  type NavigatorScreenParams,
} from "@react-navigation/native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  CircleArrowOutUpRight,
  DotIcon,
  LucideSettings2,
  MoreVerticalIcon,
  Settings,
} from "lucide-react-native";
import { UserprofileData } from "@/db/user";
import { useUserState } from "@/store/userStore";
import Button from "@/components/base/Button";
import SelectBar from "@/components/profile/SelectBar";
import Drawer from "@/components/custum/Drawer";
import CommentListView from "@/components/event/CommentList";
import EventPost from "@/components/event/EventPost";
import FriendList from "@/components/profile/FriendList";

import { Event } from "@/components/event/Event";
import { ActiveListType } from "@/constants/Types";
import { useRouter } from "expo-router";
import { useOnBoardingState } from "@/store/stateStore";
import Icon from "@/components/base/Icon";
const ProfileScreen = () => {
  const { user } = useUserState();

  //console.log(UserprofileData, "user profilr data here ");
  const router = useRouter();
  const [activeList, setActiveList] = useState<ActiveListType>("posts");
  const [CommentView, setCommentView] = useState<boolean>(false);

  return (
    <SafeAreaView className="h-full  mx-auto p-2 ">
      <View className=" flex flex-row items-center relative mt-4 p-4">
        <View className="flex flex-row items-center  gap-4">
        <Image
          className="w-16 h-16 mx-auto p-0 rounded-full "
          source={{ uri: user?.profilePhoto?.url }}
        />
        <View className="flex flex-row items-center">
        <Text className="text-xl font-semibold  m-0 p-0 ">{user?.userName} </Text>
        <Text className="font-semibold">
        ({user?.age}{user?.gender=="Male"?"M":"F"})
        </Text>
        </View>
      
           
        </View>
     <View className="flex-1 mr-auto ">
      <Button onPress={()=>router.push("(setting)/")} className="w-12  ml-auto">
      <Settings  size={25} color="black" className="" />
    
      </Button>
     
     </View>
      
      </View>

      <SelectBar setActiveList={setActiveList} activeList={activeList} />

      <View className="flex-1  bg-white">
        {activeList === "events" && (
          <FlatList
            className=""
            data={UserprofileData.events}
            renderItem={({ item: event }) => {
              return <Event key={event.id} event={event} />;
            }}
          />
        )}
        {activeList === "posts" && (
          <>
            {CommentView && (
              <Drawer
                onClose={() => setCommentView(false)}
                children={<CommentListView />}
              />
            )}

            <FlatList
              className="  "
              renderItem={({ item }) => (
                <EventPost
                  eventPost={item}
                  toggleCommentDrawer={setCommentView}
                />
              )}
              data={UserprofileData.eventPost}
            />
          </>
        )}
        {activeList === "friends" && (
          <FriendList users={UserprofileData.friends} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
