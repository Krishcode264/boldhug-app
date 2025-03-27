import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '@/components/base/Button';
import clsx from 'clsx';

const EventFilterBar = () => {
  type EventFilterType = 'New' | 'Upcoming' | 'Completed';
  const EventFilterArray: EventFilterType[] = ['New', 'Upcoming', 'Completed'];

  const [activeEventFilter, setActiveEventFilter] =
    useState<EventFilterType>('New');
  return (
    <View className="flex flex-row justify-around p-2 w-full  m-2  ">
      {EventFilterArray.map(filter => {
        return (
          <Button
            className={clsx(
              'p-1 px-3 rounded-2xl bg-gray-200 ',
              filter === activeEventFilter && 'bg-violet-400',
            )}
            onPress={() => {
              setActiveEventFilter(filter);
            }}>
            <Text
              className={clsx(
                'text-xl',
                filter === activeEventFilter && 'text-white font-medium ',
              )}>
              {filter}
            </Text>
          </Button>
        );
      })}
    </View>
  );
};

export default EventFilterBar;
