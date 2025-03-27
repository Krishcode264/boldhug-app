import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import TabBarIcon from "@/components/animated/TabBarIcon";


import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Calendar,
  HomeIcon,
  House,
  MessageCircle,
  MessageCircleMore,
  UserRound,
} from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 10, fontWeight: "900" },
        tabBarStyle: {
          height: 65,
          paddingTop: 16,
          boxShadow: " 1px 10px 5px red",
        },
        tabBarItemStyle: {},
        tabBarActiveTintColor: "#7C3AED0a0a27",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <HomeIcon
                    stroke={"white"}
                    strokeWidth={1}
                    fill={"black"}
                    size={25}
                  />
                ) : (
                  <HomeIcon size={25} color="black" />
                )}
              </>
            );
          },
          tabBarButton: (props) => <TabBarIcon props={props} />,
        }}
      />
      <Tabs.Screen
        name="(event)"
        options={{
          title: "Event",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <Calendar
                    stroke={"white"}
                    strokeWidth={1}
                    fill={"black"}
                    size={25}
                  />
                ) : (
                  <Calendar
                    stroke={"black"}
                    strokeWidth={2}
                    size={25}
                    color="black"
                  />
                )}
              </>
            );
          },
          tabBarButton: (props) => <TabBarIcon props={props} />,
        }}
      />
      <Tabs.Screen
        name="(chat)"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <MessageCircleMore
                    stroke={"white"}
                    strokeWidth={1}
                    fill={"black"}
                    size={25}
                  />
                ) : (
                  <MessageCircleMore
                    stroke={"black"}
                    strokeWidth={2}
                    size={25}
                    color="black"
                  />
                )}
              </>
            );
          },
          tabBarButton: (props) => <TabBarIcon props={props} />,
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <UserRound
                    stroke={"white"}
                    strokeWidth={1}
                    fill={"black"}
                    size={25}
                  />
                ) : (
                  <UserRound
                    stroke={"black"}
                    strokeWidth={2}
                    size={25}
                    color="black"
                  />
                )}
              </>
            );
          },
          tabBarButton: (props) => <TabBarIcon props={props} />,
        }}
      />
    </Tabs>
  );
}
