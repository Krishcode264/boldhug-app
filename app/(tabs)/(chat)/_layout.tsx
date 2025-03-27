import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';


export default function ChatLayout() {


  return (
    <Stack
        screenOptions={{headerShown:false }}

       >
   <Stack.Screen name='index' options={{title:"Chat"}}/>

    </Stack>
  );
}
