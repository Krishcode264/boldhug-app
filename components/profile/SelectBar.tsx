import { View, Text } from 'react-native'
import React, { type Dispatch, type SetStateAction } from 'react'
import Button from '@/components/base/Button';

import { cn } from '@/util/functions';
import { ActiveListType } from '@/constants/Types';



type RenderListProps = {
  activeList: ActiveListType;
  setActiveList: Dispatch<SetStateAction<ActiveListType>>;
};
const SelectBar = ({activeList,setActiveList}:RenderListProps) => {
  return (
    <View className=" bg-white rounded-xl    p-3 flex flex-row items-center justify-between px-4">
      <Button
        onPress={() => setActiveList('post')}
        className={cn(
          'bg-white  px-4 rounded-2xl',
          activeList == 'post' &&
            'bg-violet-600 text-white  shadow-violet-500 ',
        )}>
        <Text
          className={cn(activeList === 'post' && 'text-white font-medium')}>
          Posts
        </Text>
      </Button>
      <Button
        onPress={() => setActiveList('event')}
        className={cn(
          'bg-white px-4  rounded-2xl',
          activeList == 'event' && 'bg-violet-600 text-white ',
        )}>
        <Text
          className={cn(activeList === 'event' && 'text-white font-medium')}>
          Events
        </Text>
      </Button>
      <Button
        onPress={() => setActiveList('friend')}
        className={cn(
          'bg-white px-4 rounded-2xl',
          activeList == 'friend' && 'bg-violet-600 text-white ',
        )}>
        <Text
          className={cn(activeList === 'friend' && 'text-white font-medium')}>
          Friends
        </Text>
      </Button>
    </View>
  );
}

export default SelectBar;