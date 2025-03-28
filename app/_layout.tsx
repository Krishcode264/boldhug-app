import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import useAuthNavigation from "@/hooks/useAuthNavigation";
import { ActivityIndicator, View } from "react-native";
import AuthProvider from "@/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Text } from "react-native";
import { useUserState } from "@/store/userStore";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
import * as NavigationBar from "expo-navigation-bar";
import Loading from "@/components/custum/InitialLoading";
import InitialLoading from "@/components/custum/InitialLoading";
export const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  const { loading } = useAuthNavigation();
  const router = useRouter();
  const { user } = useUserState();
  NavigationBar.setBackgroundColorAsync("white");
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().then(() => {
        if (!loading && !user && segments[0] !== "(auth)") {
          console.log("is it ruuning ");
          router.replace("(auth)/Auth");
        } else {
          router.replace("(tabs)/");
        }
      });
    }
  }, [loaded,loading]);

 if(!loaded){
  return null 
 }

  if (loading) {
    return <InitialLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="loading" options={{ headerShown: false }}/>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(welcome)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(single)" options={{ headerShown: false }} />
            <Stack.Screen name="(event)" options={{ headerShown: false }} />
            <Stack.Screen name="(chat)" options={{ headerShown: false }} />
            <Stack.Screen name="(setting)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
