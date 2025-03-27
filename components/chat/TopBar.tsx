import {View, Text, Image, StatusBar} from 'react-native';
import React, {type FC} from 'react';
import Button from '@/components/base/Button';

import CallIcon from "@/assests/icons/call.svg"
import VideoCallIcon from '@/assests/icons/v-call.svg';
import { EllipsisVertical, PhoneCall, Video } from 'lucide-react-native';
type TopBarProps = {
  user: {
    name: string;
    profilePhoto: string;
  };
};
const TopBar: FC<TopBarProps> = ({user}) => {
  return (
    <View className="   mb-2   h-16 gap-2  bg-white  flex flex-1 flex-row rounded-xl items-center  justify-between    active:bg-blue-100 ">
      {/* <StatusBar backgroundColor="#EDE9FE" /> */}
      {/* <StatusBar backgroundColor={}/> */}
      <Button className="flex flex-row items-center gap-4">
        <Image
          source={{uri: user.profilePhoto || ''}}
          className="rounded-full w-12 h-12 bg-contain"
        />
        <Text className="text-lg font-medium text-slate-600">{user.name}</Text>
      </Button>
      <View className="flex flex-row items-center  gap-1 mx-4 ">
        <Button>
          <PhoneCall fill="white" className="" color={"black"} height={21} />
        </Button>
        <Button>
          <Video height={30} color="black" />
        </Button>
        <Button>
          <EllipsisVertical color={"black"} fill="white" height={21} />
        </Button>
      </View>
    </View>
  );
};

export default TopBar;
