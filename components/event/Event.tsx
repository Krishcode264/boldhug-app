import { View, Text, Image, FlatList, ScrollView } from "react-native";
import React, { type FC } from "react";
import Button from "@/components/base/Button";
import { MediaAttachment } from "@/components/chat/MessageItem";

import type { Event as EventType } from "@/db/event";
import { useNavigation } from "@react-navigation/native";
import Joines from "./Joines";
import { UserprofileData } from "@/db/user";
import { MapPin } from "lucide-react-native";
import { useRouter } from "expo-router";
import EventMediaAttachment from "./EventMediaAttachment";

export const EventInfoTag = ({ info }: { info: string | number }) => {
  return (
    <Text className="font-medium px-2 py-2 bg-gray-200 rounded-lg text-lg">
      {info}
    </Text>
  );
};
export const Event = ({ event }: { event: EventType }) => {
  const router = useRouter();
          
  return (
    <View className="w-full py-4  bg-gray-100 shadow-slate-800 shadow-xl p-2 mb-4 px-4 rounded-md flex gap-2">
      <Button
        onPress={() => {
          router.push({ pathname: `(profile)/${event.creator.id}` });
          // navigator.navigate("ProfileTabs",{
          //   screen:"GuestProfile",
          //   params:{...UserprofileData,name:event.host.name ,profilePhoto:event.host.profilePhoto as string}
          //  })
        }}
      >
        <View className="flex-row items-center gap-4 px-2 py-1.5 rounded-2xl bg-gray-200">
          <Image
            className="w-12 h-12  rounded-full "
            source={{ uri: event.creator.profilePhoto.url}}
          />
          <Text className="text-lg font-semibold">{event.creator.userName}</Text>
        </View>
      </Button>

        <Text className="font-bold text-lg px-2  w-[95%]">{event.title}</Text>
             <ScrollView className=" w-full ">
               <Text className=" px-2  w-[95%] ">{event.description}</Text>
             </ScrollView>
 

      <View className="flex-row items-center p-1   gap-2 ">
        <MapPin color={"black"} width={25} height={25} />
        <Text className="">{event.location}</Text>
      </View>

      <View className="flex-row gap-3  flex-wrap">
        <EventInfoTag info={`${event.reservedSlots} / ${event.slots}`} />
        <EventInfoTag info={event.time} />
        <EventInfoTag info={new Date(event.date).toDateString()} />
        <Button
          className=" bg-violet-600   flex justify-center items-center  p-2 px-2 rounded-xl"
          onPress={() => {
            console.log("clicked ");
            router.push({
              pathname: "(event)/details",
              params: { id: "234" },
            });
            // navigator.navigate('EventView', event);
          }}
        >
          <Text className="font-medium text-lg text-white">
            View Details to join
          </Text>
        </Button>
        <View>
          <Joines />
        </View>
      </View>
    </View>
  );
};
