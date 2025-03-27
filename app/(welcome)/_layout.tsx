import { Stack } from "expo-router";

export default function  WelcomeScreen(){
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="welcome-one"/>
            <Stack.Screen name="welcome-two"/>
            <Stack.Screen name="profile-photo"/>
        </Stack>
    )
}