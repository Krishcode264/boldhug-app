import {
  KeyboardAvoidingViewComponent,
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import InputBox from "@/components/base/Input";
import { OnBordingUser, useOnBoardingState } from "@/store/stateStore";
import Icon from "@/components/base/Icon";
import {
  ArrowLeft,
  Check,
  Loader,
  Mars,
  Transgender,
  Venus,
  X,
} from "lucide-react-native";
import Button from "@/components/base/Button";
import { cn } from "@/util/functions";
import AgeSelector from "@/components/welcome/AgeSelector";
import { Link, useRouter } from "expo-router";
import AleartModal from "@/components/custum/AleartModal";
import ErrorModal from "@/components/custum/ErrorModal";
import _ from "lodash";
import { useApi } from "@/hooks/axios";
const WelcomeTwo = () => {
  const { userName, setState, gender, age } = useOnBoardingState();
  const [status, setStatus] = useState<"UNIQUE" | "NOTUNIQUE" | "LOADING" | "">(
    "LOADING"
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const { call, error, data, loading } = useApi();

  const updateGender = (gender: "male" | "female" | "other") => {
    setState({ gender: gender });
  };

  const getAgeArray = () => {
    let arr = [];
    for (let i = 14; i < 110; i++) {
      arr.push(i);
    }
    return arr;
  };
  const router = useRouter();

  const hanldeContinue = () => {
    if (gender && age && userName && status === "UNIQUE") {
      router.push("(welcome)/profile-photo");
      return;
    }
    setShowAlert(true);
  };
  const debouncedCheckUserRef = useRef(
    _.debounce(async (name: string) => {
      if (!name || name.length < 4) return;
      
      setStatus("LOADING");
      const data = await call("/user/unique", { userName: name }, "GET");
      setStatus(data.isUnique ? "UNIQUE" : "NOTUNIQUE");
    }, 1000)
  );
  const handleUsernameChange = (text: string) => {
    const lowerText = text.toLowerCase();
    setState({ userName: lowerText });
    
    if (lowerText.length > 3) {
      debouncedCheckUserRef.current(lowerText);
    } else {
      setStatus("");
    }
  };

  const IsUnique = () => {
    return (
      <View className="flex flex-row items-center gap-4 mx-auto">
        <Text>its unique 😘</Text>
        <Icon className="bg-green-500 w-5 h-5 rounded-full  animate-none">
          <Check size={15} color="white" />
        </Icon>
      </View>
    );
  };
  const IsCheaking = () => {
    return (
      <View className="flex flex-row items-center ">
        <Icon>
          <Loader size={30} color="violet" />
        </Icon>
        <Text>checking in db to see if its unique</Text>
      </View>
    );
  };

  const IsNotUnique = () => {
    return (
      <View className="flex flex-row items-center gap-3 mx-auto ">
        <Text className="text-red-400">
          It has already taken , try another one{" "}
        </Text>
        <Icon className="bg-red-500  rounded-full animate-none w-6 h-7">
          <X size={25} color="white" />
        </Icon>
      </View>
    );
  };

  return (
    <SafeAreaView className="p-2 h-screen  w-full bg-white ">
      <View className=" p-4  h-[70%] my-auto ">
        <Text className="text-violet-500 text-2xl  mb-4 font-semibold mx-auto">
          Personal Info
        </Text>
        <View className=" ">
          <Text className=" bg-slate--800 font-medium text-lg">
            create username
          </Text>
          <View className="flex flex-row items-center mt-4 mb-4 ">
            <InputBox
              value={userName}
              placeholder="create username"
              className=" w-[90%] h-16 px-4   bg-gray-200  text-xl text-black font-semibold rounded-2xl     "
              onChangeText={handleUsernameChange}
            />
          </View>

          {loading && <IsCheaking />}
          {status === "UNIQUE" && <IsUnique />}
          {status === "NOTUNIQUE" && <IsNotUnique />}
        </View>
        <View className="my-6 ">
          <Text className=" bg-slate--800 font-medium text-lg mb-4">
            your gender
          </Text>

          <View className="flex flex-row items-center justify-evenly p-1 gap-3  ">
            <Button
              onPress={() => updateGender("male")}
              className={cn(
                "h-18 w-24 px-3 py-3 flex items-center justify-center bg-white border border-slate-400 ",
                gender === "male" && "bg-violet-100  border-violet-700"
              )}
            >
              <Mars size={25} color="black" />

              <Text className="text-black">male</Text>
            </Button>

            <Button
              onPress={() => updateGender("female")}
              className={cn(
                "h-18 w-24 px-3 py-3 flex items-center justify-center bg-white border border-slate-400 ",
                gender === "female" && "bg-violet-100  border-violet-700"
              )}
            >
              <Icon className="animate-none flex-1 ">
                <Venus size={25} color="black" />
              </Icon>
              <Text>female</Text>
            </Button>

            <Button
              onPress={() => updateGender("other")}
              className={cn(
                "h-18 w-24 px-3 py-3 flex items-center justify-center bg-white border border-slate-400 ",
                gender === "other" && "bg-violet-100  border-violet-700"
              )}
            >
              <Icon className="animate-none flex-1 ">
                <Transgender size={25} color="black" />
              </Icon>
              <Text>others</Text>
            </Button>
          </View>
        </View>
        <View className=" my-4  ">
          <Text className=" bg-slate--800 font-medium text-lg mb-4">
            your Age
          </Text>

          <View className="w-full ">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className=" w-full"
            >
              {getAgeArray().map((a) => {
                return (
                  <Button
                    onPress={() => setState({ age: a })}
                    className={cn(
                      "h-16 w-16 rounded-full  flex items-center justify-center ",
                      a === age && "bg-violet-500"
                    )}
                  >
                    <Text
                      className={cn(
                        "text-center font-bold text-2xl",
                        a === age && " text-white"
                      )}
                    >
                      {a}
                    </Text>
                  </Button>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
  
      <Button
        onPress={() => {
          hanldeContinue();
        }}
        disabled={loading }
        className="mx-auto px-4 py-2 w-[70%]    mb-4 bg-violet-500 rounded-3xl "
      >
        <Text
          style={{ letterSpacing: 0 }}
          className="text-2xl space-x-3 text-white  text-center"
        >
          Continue
        </Text>
      </Button>
      {showAlert && (
        <ErrorModal
          shouldRetry={false}
          error="you need to fill all details, before continue"
          setVisible={setShowAlert}
        />
      )}
    </SafeAreaView>
  );
};

export default WelcomeTwo;
