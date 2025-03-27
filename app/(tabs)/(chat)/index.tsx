import ChatFilterBar from '@/components/chat/ChatFilterBar';
import ChatListView from '@/components/chat/ChatListView';


import { useUserState } from '@/store/userStore';
import { styles } from '@/styles/common';
import { Image, StyleSheet, Platform,Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ChatScreen = () => {
    
  return (
    <SafeAreaView className='h-full bg-white  '>
     <ChatFilterBar/>
      <ChatListView/>
    </SafeAreaView>
  )
}

export default ChatScreen