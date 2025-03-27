import { Stack } from "expo-router";

export default function StackScreenLayout(){


    return (

        <Stack screenOptions={{headerShown:false}}>
             <Stack.Screen name="chat-view"/>
              <Stack.Screen name="index"/>
      
        </Stack>
    )
}