import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { UserprofileData } from '@/db/user';
import { MoreVertical } from 'lucide-react-native';
import Button from '@/components/base/Button';
import { User } from '@/constants/Types';
import { useRouter } from 'expo-router';
import { useUserState } from '@/store/userStore';


export type FriendListItemProps={
  name:string;
  profilePhoto:string
}

const FriendListItem = ({name, profilePhoto}:FriendListItemProps) => {
  const navigation = useNavigation();
  const router=useRouter()
  const {user}=useUserState()
  const handleNavigation = () => {
    router.push({
      pathname:"guest",
      params:{id:user?.id,userName:user?.userName,profilePhoto:user?.profilePhoto?.url}
    })
  //  navigation.navigate("ProfileTabs",{
  //   screen:"GuestProfile",
  //   params:{...UserprofileData,name,profilePhoto}
  //  })
  };

  return (
    <Pressable
      onPress={handleNavigation}
      className="w-full  gap-2   flex flex-row rounded-xl items-center py-2 px-2   active:bg-slate-200 ">
      <Image
        source={{uri: profilePhoto}}
        className="  rounded-full w-12 h-12 bg-contain"
      />

      <View className="flex flex-col ">
        <Text className="text-lg font-medium text-slate-600">{name}</Text>
      </View>
      <Button className='ml-auto'>
        <MoreVertical/>
      </Button>
    </Pressable>
  );
};

export default FriendListItem