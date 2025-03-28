import { View, Text, Image, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { EllipsisVertical, Loader, Settings } from "lucide-react-native";
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
  const { id } = useLocalSearchParams();
  


  const [activeList, setActiveList] = useState<ActiveListType>("post");
  const [CommentView, setCommentView] = useState<boolean>(false);

  const fetchUserProfile=async ()=>{
    const res=await api.get(`/user/${id}`)
   // console.log(res.data,"guest user data")
    return res.data.data
 }

const {isLoading,error,data:user,isSuccess}=useQuery({
    queryFn:fetchUserProfile,
    queryKey:[`user/${id}`]
})


  const { isLoading:loading, data,  isError } = useQuery({
    queryFn: async () => {
      const response = await api.get(`/${activeList}/${id}`);
    //  console.log("response", response.data);
      return response.data;
    },

    queryKey: [`${activeList}`],
  });

  return (
    <SafeAreaView className="h-full w-full  mx-auto p-2 ">
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
              {user?.gender == "male" ? "M" : "F"})
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
                  key={item.id}
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

        {activeList === "friend" && data && (data.length>0 ?  (
          <FriendList users={UserprofileData.friends} />
        ):(<Text  className="text-center mt-12">
          no friend found
        </Text>))}
      </View>
    </SafeAreaView>
  );
};

export default GuestProfile;
