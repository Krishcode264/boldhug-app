import { Stack } from "expo-router"

export default function SingleScreenLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="media-viewer"/>
            <Stack.Screen name="video-player"/>

            <Stack.Screen name="index"/>
        </Stack>
    )
}