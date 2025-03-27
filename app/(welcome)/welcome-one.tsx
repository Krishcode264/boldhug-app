import { View, Text } from "react-native";
import React from "react";
import { useUserState } from "@/store/userStore";
import { SafeAreaView } from "react-native-safe-area-context";
import BrandLogo from "@/components/base/BrandLogo";
import Icon from "@/components/base/Icon";
import Button from "@/components/base/Button";
import { useRouter } from "expo-router";

const WelcomeOne = () => {
  const { user, isAuthenticated } = useUserState();
const router=useRouter()
  return (
    <SafeAreaView className="flex-[0.4] w-full h-full  m-auto">
      <View style={{marginBottom:100}} className="flex   items-center justify-center gap-4 ">
        <View className=" ">
        <Text style={{fontSize:30,fontWeight:"semibold"}} className="text-2xl   "> Welcome to </Text>
        </View>
       <Icon className="animate-none">
       <BrandLogo />
       </Icon>
       
      </View>
      <Button onPress={()=>{
        router.push("(welcome)/welcome-two")
      }} className="mx-auto px-4 py-2 w-[70%]   bg-violet-500 rounded-3xl ">
          <Text style={{letterSpacing:1}} className="text-2xl space-x-3 text-white  text-center">
            let's get Started 
          </Text>
      </Button>
    </SafeAreaView>
  );
};

export default WelcomeOne;
