import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useCallback, useEffect, type FC} from 'react';

import TopBar from '@/components/chat/TopBar';
import ChatInput from '@/components/chat/ChatInput';
import MessageList from '@/components/chat/MessageList';


import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import type { ChatStackParamList } from '@/navigations/ChatNavigation';
import Button from '@/components/base/Button';
import { ArrowLeft, ChevronLeft, SkipBackIcon, StepBack } from 'lucide-react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import BottomNavigationBar from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigationBar';
import * as NavigationBar from "expo-navigation-bar";


const DetailedChatView = () => {
    const { name, profilePhoto } = useLocalSearchParams();
  const router=useRouter()
 


  useFocusEffect(() => {
   
      NavigationBar.setBackgroundColorAsync("#ddd6fe");
   
   
    
  });
  return (
    <SafeAreaView className="p-0 bg-white" style={{flex: 1}}>
      <View className=' flex flex-row items-center bg-white    shadow-slate-800 '>
        <Button  onPress={()=>router.back()}>
          <ArrowLeft color="black" size={25} />
        </Button>
      <TopBar user={{name:name as string,profilePhoto:profilePhoto as string}} />
      </View>
   
      <MessageList />
      <ChatInput />
    </SafeAreaView>
  );
};

export default DetailedChatView;