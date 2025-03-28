import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import Button from "@/components/base/Button";
import { ArrowLeft, User } from "lucide-react-native";
import * as Picker from "expo-image-picker";
import { usePreAuthState, useUserState } from "@/store/userStore";
import { useOnBoardingState } from "@/store/stateStore";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useApi } from "@/hooks/axios";
import { G } from "react-native-svg";
import api from "@/util/axios";
import * as FileSystem from "expo-file-system";
import { isLoaded } from "expo-font";
import AleartModal from "@/components/custum/AleartModal";
import LoadingScreen from "@/components/base/LoadingScreen";
import axios, { AxiosError } from "axios";
import ErrorModal from "@/components/custum/ErrorModal";
import { Buffer } from 'buffer';
import InputBox from "@/components/base/Input";
const EditprofilePhoto = () => {
  const { width, height } = Dimensions.get("screen");
  const { profilePhoto, setState, userName, gender, age, name } =
    useOnBoardingState();
  const [loading, setLoading] = useState({ isLoading: false, message: "" });
  const [err, setErr] = useState({ isError: false, error: "" });
  const { setUser, user } = useUserState();
  const router = useRouter();
  
  const handleSelectPhoto = async () => {
    const file = await Picker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [3, 3],
      quality: 0.5,
      allowsMultipleSelection: false,
    });
    if (file.assets?.length && file.assets.length > 0) {
      setState({ profilePhoto: file.assets[0] });
    }
  };

  const handleSubmitProfileData = async () => {
    setLoading({ isLoading: true, message: "updating profile" });
    try {
      setLoading({ isLoading: true, message: "updating profile" });
      const res = await api.patch("/user", { data:{ userName, gender, age,name }});
    //  console.log("user update",res.data)
      const photoUpload = await api.get("/user/profile-photo/upload-url", {
        params: {
          fileName: profilePhoto?.fileName,
          type: profilePhoto?.type,
        },
      });
    //  console.log("upload uri",photoUpload.data.url)
      if (res.data) {
        setUser({ ...res.data });
      }

      if (photoUpload.data.url) {
        setLoading({ isLoading: true, message: "uploading profile photo" });
        const fileData = await FileSystem.readAsStringAsync(
          profilePhoto?.uri as string,
          {
            encoding: FileSystem.EncodingType.Base64,
          }
        );

        const fileBuffer = Buffer.from(fileData, "base64");
        const res = await axios.put(photoUpload.data.url, fileBuffer,{headers:{"Content-Type":profilePhoto?.type}});
      //  console.log("sending to s3 success")
        const photoUri = await api.post("/user/profile-photo/confirm", {
          key: photoUpload.data.key,
        });
      //  console.log("confirmation success",photoUri.data)
        if (photoUri.data.url) {
          setUser({profilePhoto:{url:photoUri.data.url,id:photoUri.data.id,type:"image"} });
          
        }
      }
      setLoading({ isLoading: false, message: "" });
      router.replace("(tabs)/");
    } catch (err) {
      console.log("errorat update profile ",err)
      setLoading({
        isLoading: false,
        message: "",
      });
   
      setErr({isError:true,error:err  instanceof AxiosError? err?.response?.data.message :"something went wrong updating profile data , try again" })
    }
  };

  const ProfilePhoto = () => {
    return (
      <View className="border-violet-300  rounded-full p-2">
        <Image
          className="w-full h-full rounded-full   p-2"
          style={{}}
          source={{ uri: profilePhoto?.uri }}
        />
        <Button
          style={{ top: 40 }}
          className="rounded-full flex right-0  absolute bg-violet-500 items-center justify-center"
          onPress={handleSelectPhoto}
        >
          <User color="white" size={25} />
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-[1] p-2 items-center justify-center gap-8">
      <View
        className="bg-violet-200  rounded-full"
        style={{ width: width / 1.8, height: width / 1.8 }}
      >
        {profilePhoto ? (
          <ProfilePhoto />
        ) : (
          <>
            <Button
              className="rounded-full flex h-full  items-center justify-center"
              onPress={handleSelectPhoto}
            >
              <User color="white" size={80} />
            </Button>
          </>
        )}
      </View>

      <InputBox
        style={{textAlignVertical:"top"}}
        onChangeText={(text)=> setState({})}
        multiline
        value={ name }
        placeholder="your name "
        className="w-full text-xl text-black  bg-gray-200 rounded-2xl     "
     
    
      />
      <Text className="font-semibold text-violet-700 text-xl">
        set up profile Photo
      </Text>
      <Button
        onPress={() => {
          router.back();
        }}
        className=" w-[80%] flex items-start "
      >
        <ArrowLeft color={"darkviolet"} size={40} />
      </Button>
      <Button
        onPress={async() => {
         await handleSubmitProfileData()
        }}
        disabled={profilePhoto ? false : true || loading}
        className="mx-auto px-4 py-2 w-[70%]    mb-4 bg-violet-500 rounded-3xl "
      >
        <Text
          style={{ letterSpacing: 0 }}
          className="text-2xl space-x-3 text-white  text-center"
        >
          continue
        </Text>
      </Button>

         {loading.message && <Text className="text-violet-500">{loading.message}</Text>}
      {err.isError && <ErrorModal error={err.error}  shouldRetry={true} retry={handleSubmitProfileData} setVisible={setErr}/>}
    </SafeAreaView>
  );
};

export default EditprofilePhoto;
