import { View, Text, Image, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { EllipsisVertical, Settings } from "lucide-react-native";
import Button from "@/components/base/Button";
import SelectBar from "@/components/profile/SelectBar";
import { ActiveListType } from "@/constants/Types";
import { useQuery } from "@tanstack/react-query";
import api from "@/util/axios";
import { useLocalSearchParams } from "expo-router";
import { useUserState } from "@/store/userStore";
import Icon from "@/components/base/Icon";
import FriendList from "@/components/profile/FriendList";
import { UserprofileData } from "@/db/user";
import EventPost from "@/components/event/EventPost";
import CommentListView from "@/components/event/CommentList";
import Drawer from "@/components/custum/Drawer";
import { Event } from "@/components/event/Event";
const GuestProfile = () => {
  const { id, userName, profilePhoto } = useLocalSearchParams();
  const { user } = useUserState();
  //  const fetchUserProfile=async ()=>{
  //     const res=await api.get(`/user/${id}`)
  //     return res.data
  //  }

  // const {isLoading,error,data,isSuccess}=useQuery({
  //     queryFn:fetchUserProfile,
  //     queryKey:[`user/${id}`]
  // })

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
            <Text className="text-xl font-semibold  m-0 p-0 ">
              {user?.userName}{" "}
            </Text>
            <Text className="font-semibold">
              ({user?.age}
              {user?.gender == "Male" ? "M" : "F"})
            </Text>
          </View>
        </View>
        <View className="flex-1 mr-auto ">
          <View className="w-12  ml-auto">
            <EllipsisVertical size={25} color="black" className="" />
          </View>
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

export default GuestProfile;
