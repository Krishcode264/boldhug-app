import { View, Text } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import Button from '@/components/base/Button';
import clsx from 'clsx';

type EventFilterType = 'New' | 'Joined' | 'Completed';

export type EventFilterBarProps = {
  filterArray: EventFilterType[]; 
  activeFilter: EventFilterType;
  setActiveFilter: Dispatch<SetStateAction<EventFilterType>>; 
};

const EventFilterBar = ({ activeFilter, setActiveFilter, filterArray }: EventFilterBarProps) => {
  return (
    <View className="flex flex-row justify-around p-2 w-full m-2">
      {filterArray.map((filter) => (
        <Button
          key={filter} 
          className={clsx(
            'p-1 px-3 rounded-2xl bg-gray-200',
            filter === activeFilter && 'bg-violet-400'
          )}
          onPress={() => setActiveFilter(filter)}
        >
          <Text className={clsx('text-xl', filter === activeFilter && 'text-white font-medium')}>
            {filter}
          </Text>
        </Button>
      ))}
    </View>
  );
};

export default EventFilterBar;

