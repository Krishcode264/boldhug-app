import { View, Text, Dimensions } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/base/SafeAreaWrapper";
import { useEventState } from "@/store/eventStore";
import CustomCircularProgress from "@/components/animated/CircularProgress";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Button from "@/components/base/Button";
import { useRouter } from "expo-router";
import { usePostState } from "@/store/postStore";

const CreateEventLoader = () => {
  const { status } = usePostState();
  const { width } = Dimensions.get("window");
  const router=useRouter()
  return (
    <SafeAreaWrapper className="flex-1  items-center justify-start">
      <View className="h-[70%] my-auto w-[80%] mx-auto ">
        <AnimatedCircularProgress
          size={200}
          width={15}
          style={{marginHorizontal:"auto"}}
          fill={status?.progress || 0}
          tintColor={status?.status==="failed"?"red":"violet"}
          onAnimationComplete={() => {}}
          backgroundColor="white"
        />

        <Text className="text-violet-500 text-xl mt-12 text-center">{status?.label}</Text>

        {status?.progress === 100 && (
          <Button  onPress={()=>router.replace("(tabs)/(profile)/user")} className="w-[80%] my-6 px-2 py-2 mx-auto rounded-3xl  bg-violet-500">
            <Text className="text-center text-white text-2xl font-semibold">continue</Text>
          </Button>
        )}
        {
          status?.status=="failed" && (
            <Button onPress={()=>router.back()} className="w-[80%] px-2 py-2 my-6   mx-auto rounded-3xl  bg-red-500">
            <Text className="text-center text-white text-xl font-semibold">check your Post </Text>
          </Button>
          )
        }
      </View>
    </SafeAreaWrapper>
  );
};

export default CreateEventLoader;
