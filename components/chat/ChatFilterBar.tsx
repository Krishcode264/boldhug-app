import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '@/components/base/Button';
import clsx from 'clsx';
import { ScrollView } from 'react-native';
const ChatFilterBar = () => {
  type filterType = 'All' | 'Friends' | 'Groups' | 'Unreads';
  const filterArray:filterType[] = ['All', 'Friends', 'Groups', 'Unreads'];

  const [activeFilter, setActiveFilter] = useState<filterType>('All');
  return (
    <View>
 <ScrollView horizontal={true}  contentContainerClassName='' contentContainerStyle={{justifyContent:"space-evenly", width:"100%",height:30 }}  className=" p-0 m-0  my-4  ">
      {filterArray.map(filter => {
        return (
          <Button
            onPress={() => {
              setActiveFilter(filter);
            }}
          
            className={clsx(
              'px-2 py-1   bg-gray-100  rounded-2xl ',
              activeFilter === filter && 'bg-violet-400 text-white',
            )}
            key={filter}>
            <Text
              className={clsx(
                'text-center text-lg text-slate-600',
                activeFilter === filter && ' text-white',
              )}>
              {filter}
            </Text>
          </Button>
        );
      })}
    </ScrollView>
    </View>
   
  );
};

export default ChatFilterBar;
