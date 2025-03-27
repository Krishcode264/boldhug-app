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
    <View className=" bg-violet-50 rounded-xl    p-3 flex flex-row items-center justify-between px-4">
      <Button
        onPress={() => setActiveList('posts')}
        className={cn(
          'bg-white  px-4 rounded-2xl',
          activeList == 'posts' &&
            'bg-violet-600 text-white  shadow-violet-500 ',
        )}>
        <Text
          className={cn(activeList === 'posts' && 'text-white font-medium')}>
          Posts
        </Text>
      </Button>
      <Button
        onPress={() => setActiveList('events')}
        className={cn(
          'bg-white px-4  rounded-2xl',
          activeList == 'events' && 'bg-violet-600 text-white ',
        )}>
        <Text
          className={cn(activeList === 'events' && 'text-white font-medium')}>
          Events
        </Text>
      </Button>
      <Button
        onPress={() => setActiveList('friends')}
        className={cn(
          'bg-white px-4 rounded-2xl',
          activeList == 'friends' && 'bg-violet-600 text-white ',
        )}>
        <Text
          className={cn(activeList === 'friends' && 'text-white font-medium')}>
          Friends
        </Text>
      </Button>
    </View>
  );
}

export default SelectBar;