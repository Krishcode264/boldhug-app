import { Image, StyleSheet, Platform, Text, View } from "react-native";

import { FlatList } from "react-native";
import React, { useState, type FC } from "react";

import EventFilterBar from "@/components/event/EventFilterBar";
import { Event } from "@/components/event/Event";

import Button from "@/components/base/Button";

import { Loader, PlusCircle } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import api from "@/util/axios";
import { useQuery } from "@tanstack/react-query";
import Icon from "@/components/base/Icon";

const EventScreen = () => {
  const router = useRouter();
  type EventFilterType = "New" | "Joined" | "Completed";
  const EventFilterArray: EventFilterType[] = ["New", "Joined", "Completed"];

  const [activeEventFilter, setActiveEventFilter] =
    useState<EventFilterType>("New");
  const { isLoading, data, error, isError } = useQuery({
    queryFn: async () => {
      const response = await api.get(`/event/random`);
      return response.data.events;
    },
    queryKey: [`events/${activeEventFilter}`],
  });

  return (
    <SafeAreaView className=" h-full  ">
      {/* <SearchBar /> */}
      <Button
        onPress={() => {
          router.push({ pathname: `(event)/create-one` });
        }}
        className=" bg-violet-500 w-[90%] h-16 mx-auto mt-2 rounded-xl flex-row items-center justify-center gap-4"
      >
        <Text className="text-white text-xl font-semibold text-center">
          Create an Event
        </Text>
        <View className="p-1  rounded-md bg-purple-500">
          <PlusCircle color={"white"} width={25} height={25} />
        </View>
      </Button>
      <EventFilterBar
        activeFilter={activeEventFilter}
        setActiveFilter={setActiveEventFilter}
        filterArray={EventFilterArray}
      />

      {isLoading && (
        <Icon className="mx-auto">
          <Loader size={30} color="violet" />
        </Icon>
      )}

      <FlatList
        className=" w-full h-full upx-2 "
        data={data}
        renderItem={({ item: event }) => {
         
         return <Event key={event.id} event={event} />;
        }}
      />
    </SafeAreaView>
  );
};

export default EventScreen;
