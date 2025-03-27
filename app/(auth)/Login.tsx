import { View, Text, TextInput, Pressable } from "react-native";
import React, { useEffect } from "react";

import { useNavigation, type NavigationProp } from "@react-navigation/native";


import { useState } from "react";
import { getAuthContext } from "../../context/AuthContext";

import GoogleAuth from "../../components/auth/GoogleAuth";
import BrandLogo from "../../components/base/BrandLogo";

import EncryptedStorage from "react-native-encrypted-storage";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import One from "@/screens/One";
import { SendHorizonal } from "lucide-react-native";
import InputBox from "@/components/base/Input";
import Button from "@/components/base/Button";

export type LoginStateType = {
  identifier: string;
};
const Login = () => {
  const loading = false;
  const [loginState, setLoginState] = useState<LoginStateType>({
    identifier: "",
  });
  const router = useRouter();
  const AuthState = getAuthContext();



  const handleLogin = async () => {
    // try{
    //      const user=data.userLogin.user
    //      await EncryptedStorage.setItem("user", JSON.stringify(user))
    //      await EncryptedStorage.setItem("token",data.userLogin.accessToken)
    //      await EncryptedStorage.setItem("refresh_token",data.userLogin.refreshToken)
    //         AuthState.setAuthState({user:user,isLoggedIn:true})
    //         AuthState.setLoading(false)
    //   } else{
    //    console.log("error ",error)
    //   }
    // } catch(err){
    //   console.log("somethign went wring here at login ", err)
    // }
  };

  const otp = true;
 const time=20
  return (
    <SafeAreaView className=" w-[96%]  h-[90%]  m-auto p-2 px-4 ">
      <BrandLogo />

      <InputBox
        editable={!loading}
        placeholder="Enter Email or phone Number "
        className=" w-[95%] mb-2 mt-12 h-16 px-4   bg-gray-200  text-xl text-black font-semibold rounded-2xl     "
        value={loginState.identifier}
        onChangeText={(text) =>
          setLoginState((prev) => ({identifier:text}))
        }
      />

      <Button className="bg-violet-300 w-[30%]">
        <Text className="">
          Send OTP
        </Text>
      </Button>
      {otp && (
        <View className="m-2">
        <Text className="text-orange-700 px-4 ">enter OTP</Text>
          <InputBox
            editable={!loading}
            placeholder=" "
            className=" w-[95%] mb-6  h-16 px-4   bg-gray-200  text-xl text-black font-semibold rounded-2xl     "
            value={loginState.identifier}
            onChangeText={(text) =>
              setLoginState((prev) => ({ ...prev, identifier: text }))
            }
          />
          <View className="flex flex-row  w-full justify-between items-center   ">
            <Text>
              resend OTP in  {time} sec
            </Text>
              <Button>
                <SendHorizonal color={"red"} width={40} height={40}/>
              </Button>
          </View>
        </View>
      )}

      <Button
        disabled={loading}
        title={loading ? "signin you in " : "continue"}
        className="  bg-violet-500 w-full   mx-auto  rounded-2xl  "
        textStyle="text-2xl text-white  text-center font-semibold "
        onPress={handleLogin}
      />
      <Button
        disabled={loading}
        title={loading ? "signin you in " : "create Account"}
        className="  bg-violet-500 w-full  mt-3 mb-3 mx-auto  rounded-2xl  "
        textStyle="text-2xl text-white  text-center font-semibold "
        onPress={handleLogin}
      />
      <GoogleAuth />
    </SafeAreaView>
  );
};

export default Login;
