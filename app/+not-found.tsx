import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="p-12 bg-violet-200 h-full w-full">
      <Text>hey</Text>
      <Link className="p-12 bg-red-200" href={"(tabs)"}>
      go back to home screen
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
