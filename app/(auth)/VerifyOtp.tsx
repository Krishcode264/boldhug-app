import { View, Text, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";

import InputBox from "@/components/base/Input";
import Button from "@/components/base/Button";
import {
  ArrowLeft,
  LucideSendHorizonal,
  SendHorizonal,
  SendIcon,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import { useApi } from "@/hooks/axios";
import ErrorModal from "@/components/custum/ErrorModal";
import { usePreAuthState, useUserState } from "@/store/userStore";
import { setValuetoEcriptedStorage } from "@/util/appStorage";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const time = 22;

  const {
    call: verifyOtp,
    loading,
    error,
    setIsError,
    setError,
    isError,
  } = useApi();
const identifier=usePreAuthState((state)=>state.identifier)
const {setUser}=useUserState()
  const handleVerifyOtp = async () => {
    if (otp.length === 6) {
      const res = await verifyOtp("/auth/otp/verify", { otp:Number(otp),identifier }, "POST");
      if (res.user) {
           
         setUser(res.user)
         
          await setValuetoEcriptedStorage("user",JSON.stringify(res.user))
          await setValuetoEcriptedStorage("token",res.accessToken)
          await setValuetoEcriptedStorage("refresh_token",res.refreshToken)

          if(res.user.isExistingUser){
            router.replace("(tabs)/");
            return 
          }

           router.replace("(welcome)/welcome-one")
      }
    } else {
      setError("check your OTP it should be 6 digit number");
      setIsError(true)
    }
  };

  return (
    <SafeAreaView className=" w-[100%] h-[60%]  m-auto  p-2 px-4 ">
      <Text className="text-center mb-12 font-semibold text-xl text-violet-700">
        Enter OTP
      </Text>

      <View className="w-full   ">
        <InputBox
          editable={!loading}
          placeholder="Enter 6 digit OTP you got "
          value={otp}
          className=" w-[95%] mb-4 bg-gray-200 h-16 text-xl text-black font-semibold rounded-2xl     "
          onChangeText={(text) => setOtp((prev) => text)}
        />

        {true && (
          <View className="m-2">
            <View className="flex flex-row  w-full justify-between items-center   ">
              <Text>resend OTP in {time} sec</Text>
              <Button>
                <View className="rounded-full flex justify-center items-center   ">
                  <LucideSendHorizonal color={"red"} width={30} height={30} />
                </View>
              </Button>
            </View>
          </View>
        )}

        {isError && (
          <ErrorModal
            error={error}
            shouldRetry={false}
            setVisible={setIsError}
          />
        )}
        <View>
          <Button
            onPress={() => {
              router.navigate("(auth)/Auth");
            }}
          >
            <ArrowLeft color={"darkviolet"} width={40} height={30} />
          </Button>
          <Button
            onPress={handleVerifyOtp}
            disabled={loading}
            title={loading ? "sending  OTP " : "continue"}
            className=" bg-violet-500 w-full  mb-4  mx-auto  rounded-2xl  "
            textStyle="text-2xl text-white  text-center font-semibold "
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOtp;
