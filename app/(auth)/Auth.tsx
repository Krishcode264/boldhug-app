import { View, Text, SafeAreaView, Alert } from "react-native";
import React, { useState } from "react";
import GoogleAuth from "@/components/auth/GoogleAuth";
import BrandLogo from "@/components/base/BrandLogo";
import InputBox from "@/components/base/Input";
import { SendHorizonal } from "lucide-react-native";
import Button from "@/components/base/Button";
import api from "@/util/axios";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { sendOtp } from "@/hooks/api/auth";
import { AxiosResponse } from "axios";
import { useSendotp } from "@/hooks/api/auth";
import { useApi } from "@/hooks/axios";
import { useRouter } from "expo-router";
import { Snackbar } from "react-native-paper";
import ErrorModal from "@/components/custum/ErrorModal";
import { usePreAuthState } from "@/store/userStore";
import AleartModal from "@/components/custum/AleartModal";
import LoadingScreen from "@/components/base/LoadingScreen";
const Auth = () => {
  const router = useRouter();
   const [alert,setAlert]=useState({message:"",show:false})
  const { identifier, existedUser, updatePreAuthState, authAction } =
    usePreAuthState();
  const {
    call: generateOtp,
    loading,
    isError,
    error,
    data,
    setIsError,
    setError,
  } = useApi();

  const handleGenerateOtp = async () => {
    // const isEmail = z.string().email().safeParse(identifier);

    // const isPhoneNumber = z
    //   .string()
    //   .regex(/^\d{12}$/, "Phone number must be exactly 12 digits")
    //   .safeParse(identifier.split("+")[1]);

    // if (!isEmail.success && !isPhoneNumber.success) {
    //   console.log("it did not run ");
    //   setError(
    //     "email or Number is not correct , number should start with country code eg: +915353535236"
    //   );
    //   setIsError(true);
    // }
    // if (isEmail.success || isPhoneNumber.success) {
      const res = await generateOtp(
        "/auth/otp/generate",
        { identifier, authAction },
        "POST"
      );

      if (!isError) {
        router.push("(auth)/VerifyOtp");
      }
    
  };

  const preAuthCheck = async() => {
    const isEmail = z.string().email().safeParse(identifier);

    const isPhoneNumber = z
      .string()
      .regex(/^\d{12}$/, "Phone number must be exactly 12 digits")
      .safeParse(identifier.split("+")[1]);


    if (!isEmail.success && !isPhoneNumber.success) {
      console.log("it did not run ");
      setError(
        "email or Number is not correct , number should start with country code eg: +915353535236"
      );
      setIsError(true);
    }
    if (isEmail.success || isPhoneNumber.success) {
      const {data}=await api.post("/auth/precheck",{identifier})
   console.log(data.isExists,"preauth check",authAction,)
       if(data.isExists && authAction==="CREATE"){
               setAlert({message:"we have found account alredy exists, you wanna login ?",show:true})
               return 
       } 
       if(!data.isExists && authAction==="SIGNIN"){
       
        setAlert({message:"we have not found any account linked with this credential, you wanna create one ?",show:true})
        return 
       }

      await handleGenerateOtp()
    }
  };

  const handlecreateAccount = async () => {
    updatePreAuthState({ authAction: "CREATE" });
     await preAuthCheck()
  };

  if(loading) return (
    <LoadingScreen/>
  )
  return (
    <SafeAreaView className=" w-[96%]  h-[90%]  m-auto p-2 px-4 ">

      <BrandLogo />

      <InputBox
        editable={!loading}
        placeholder="Enter Email or phone Number "
        className=" w-[95%] mb-12 mt-12 h-16 px-4 py-4  bg-gray-200  text-xl text-black font-semibold rounded-2xl     "
        value={identifier}
        onChangeText={(text) => updatePreAuthState({ identifier: text })}
      />
      {
        alert.show && (
          <AleartModal alert={alert.message}  setVisible={setAlert} handler={async function (): Promise<void> {
                  updatePreAuthState({authAction:authAction==="CREATE"?"SIGNIN":"CREATE"})
                  setAlert({message:"",show:false})
                   await handleGenerateOtp()
          } }          
          />
        )
      }

      {isError && (
        <ErrorModal
          error={error}
          shouldRetry={false}
          onclose={() => {}}
          setVisible={setIsError}
        />
      )}
      <Button
        disabled={loading}
        title={loading ? "sending OTP " : "continue"}
        className=" bg-violet-500 w-full  mb-4  mx-auto  rounded-2xl  "
        textStyle="text-2xl text-white  text-center font-semibold "
        onPress={preAuthCheck}
      />

      <Button
        disabled={loading}
        title={"create account"}
        className=" bg-violet-500 w-full  mb-4  mx-auto  rounded-2xl  "
        textStyle="text-2xl text-white  text-center font-semibold "
        onPress={handlecreateAccount}
      />

      <GoogleAuth />
    </SafeAreaView>
  );
};

export default Auth;
