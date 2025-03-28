import { Stack } from "expo-router";

export default function StackPostScreenLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      {/* <Stack.Screen name="details" options={{ headerShown: false }} /> */}
      <Stack.Screen name="create-one"  options={{ headerShown: false ,}} />
      <Stack.Screen name="create-two"  options={{ headerShown: false ,}} />
\
  
    </Stack>
  );
}
