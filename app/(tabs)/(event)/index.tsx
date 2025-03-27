
import { Image, StyleSheet, Platform,Text, View } from 'react-native';


import {
  FlatList,
} from 'react-native';
import React, {type FC} from 'react';


import EventFilterBar from '@/components/event/EventFilterBar';
import {Event}from '@/components/event/Event';
import {events} from '@/db/event';
import Button from '@/components/base/Button';

import { PlusCircle } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  useRouter } from 'expo-router';

const EventScreen = () => {
  const router=useRouter()
  return (
    <SafeAreaView className=" h-full  ">
      {/* <SearchBar /> */}
      <Button onPress={()=>{router.push({pathname:`(event)/create-one`})}} className=" bg-violet-500 w-[90%] h-16 mx-auto mt-2 rounded-xl flex-row items-center justify-center gap-4">
        <Text className="text-white text-xl font-semibold text-center">
          Create an Event
        </Text>
        <View className="p-1  rounded-md bg-purple-500">
          <PlusCircle color={"white"} width={25} height={25} />
        </View>
      </Button>
      <EventFilterBar />
      <FlatList
        className="px-2"
        data={events}
        renderItem={({item: event}) => {
          return <Event key={event.id} event={event} />;
        }}
      />
    </SafeAreaView>
  );
};

export default EventScreen;