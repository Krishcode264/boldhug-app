import { Stack } from "expo-router";

export default function StackScreenLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
  
    </Stack>
  );
}
