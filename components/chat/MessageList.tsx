import { View, Text, FlatList, Platform } from 'react-native'
import React from 'react'
import MessageItem from './MessageItem'
import { messageData } from '@/db/db'

const MessageList = () => {
  return (
    <View
      className=" w-full  bg-white p-1"
      style={{flex:1,zIndex: 0, elevation: 0, position: 'relative'}}>
      <FlatList
        data={messageData}
        contentContainerStyle={{gap: 8}}
        
        renderItem= {({item: msg}) => (
          <MessageItem msg={msg} key={msg.id} />
        )}>
      </FlatList>
    </View>
  );
}

export default MessageList