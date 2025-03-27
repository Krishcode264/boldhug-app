import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView } from 'react-native';


export default function ChatLayout() {


  return (
    <Stack
        screenOptions={{headerShown:false }}

       >
     
        <Stack.Screen name='index' />

      
   
    </Stack>
  );
}
