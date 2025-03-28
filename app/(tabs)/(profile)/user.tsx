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
  CirclePlus,
  DotIcon,
  Loader,
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
import { useQuery } from "@tanstack/react-query";
import api from "@/util/axios";
import { Event as EventType } from "@/store/eventStore";
import SafeAreaWrapper from "@/components/base/SafeAreaWrapper";
const ProfileScreen = () => {
  const { user } = useUserState();

  //console.log(UserprofileData, "user profilr data here ");
  const router = useRouter();
  const [activeList, setActiveList] = useState<ActiveListType>("post");
  const [CommentView, setCommentView] = useState<boolean>(false);

  const { isLoading, data, error, isError } = useQuery({
    queryFn: async () => {
      const response = await api.get(`/${activeList}`);
      // console.log("response", response.data);
      return response.data;
    },

    queryKey: [`${activeList}`],
  });

  return (
    <SafeAreaWrapper className="  h-full p-2  ">
      <View className=" flex  flex-row items-center relative px-2 m rounded-3xl  shadow-black shadow-2  bg-gray-200  mb-2">
        <View className="flex  flex-row items-center  gap-4 shadow-2xl   ">
          <Button onPress={()=>router.push("(edit)/photo")}>
            <Image
              className="w-16 h-16 mx-auto p-0 rounded-full "
              source={{ uri: user?.profilePhoto?.url }}
            />
          </Button>

          <View className="flex flex-row items-center">
            <Text className="text-xl font-semibold  m-0 p-0 ">
              {user?.userName}{" "}
            </Text>
            <Text className="font-semibold">
              ({user?.age}
              {user?.gender == "Male" ? "M" : "F"})
            </Text>
          </View>
        </View>

        <View className="flex-1 flex-row mr-auto ">
          <Button
            onPress={() => router.push("(post)/create-one")}
            className="w-12  ml-auto"
          >
            <CirclePlus size={25} color="black" className="" />
          </Button>
          <Button
            onPress={() => router.push("(setting)/")}
            className="w-12  ml-auto"
          >
            <Settings size={25} color="black" className="" />
          </Button>
        </View>
      </View>

      <SelectBar setActiveList={setActiveList} activeList={activeList} />

      <View className="flex-1 w-full h-full   bg-white">
        {isLoading && (
          <Icon className="mx-auto">
            <Loader size={30} color="violet" />
          </Icon>
        )}

        {activeList === "event" &&
          data &&
          (data.length > 0 ? (
            <FlatList
              className=" w-full h-full "
              data={data}
              renderItem={({ item: event }) => {
                return <Event key={event.id} event={event} />;
              }}
            />
          ) : (
            <Text className="text-center mt-12">no events found 😏</Text>
          ))}

        {activeList === "post" &&
          data &&
          (data.length > 0 ? (
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
                data={data}
              />
            </>
          ) : (
            <Text className="text-center mt-12"> no posts found 😊</Text>
          ))}

        {activeList === "friend" &&
          data &&
          (data.length > 0 ? (
            <FriendList users={UserprofileData.friends} />
          ) : (
            <Text className="text-center mt-12">no friend found</Text>
          ))}
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;
