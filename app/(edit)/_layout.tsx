import { Stack } from "expo-router";

export default function StackScreenLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="photo" options={{ headerShown: false }} />
    
    </Stack>
  );
}
