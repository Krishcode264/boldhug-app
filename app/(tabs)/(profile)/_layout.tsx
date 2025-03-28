import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="user" options={{ title: "Profile" }} />
      <Stack.Screen name="[id]" options={{ title: "Profile" }} />
      
    </Stack>
  );
}
