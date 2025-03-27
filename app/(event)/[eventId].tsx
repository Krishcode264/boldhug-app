import { View, Text, Image } from 'react-native'
import React, { type FC } from 'react'

import Button from '@/components/base/Button'
import { ChevronLeft, ChevronRightIcon, SkipBackIcon } from 'lucide-react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQuery } from '@tanstack/react-query'
import api from '@/util/axios'



const EventDeatilView = () => {

const router=useRouter()
  const { id } = useLocalSearchParams();


  const fetchEventDetails=async()=>{
    const  res=await api.get(`/event/${id}`)
    return res.data
  }

  const {isLoading,data,error,isError}=useQuery({
    queryFn:fetchEventDetails,
    queryKey:[`event/${id}`],
  })
  return (
    <SafeAreaView className="bg-violet-100 h-full ">
      
      <View className="flex-row items-center gap-4 p-2 rounded-2xl bg-blue-50">
     
      <Button onPress={
        ()=>router.back()
        }>
      <ChevronLeft/>
      </Button>
        <Image
          className="w-12 h-12  rounded-full "
          source={{uri: data?.host.profilePhoto}}
        />
        <Text className="text-lg font-semibold">{data?.host?.name}    {id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default EventDeatilView