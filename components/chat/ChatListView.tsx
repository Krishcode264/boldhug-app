import { View, Text } from 'react-native'
import React from 'react'
import ChatListItem, { } from './ChatListItem'
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { users } from '@/db/db';

const ChatListView = () => {
  return (
    <FlatList
      renderItem={({item:user})=><ChatListItem name={user.userName} profilePhoto={user.profilePhoto} />}
      contentContainerStyle={{gap: 8}}
      
      data={users}
      contentContainerClassName='gap-2'
      className="rounded-md p-1 "
    />
  );
}

export default ChatListView