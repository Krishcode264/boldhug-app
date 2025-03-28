import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import SafeAreaWrapper from "@/components/base/SafeAreaWrapper";
import InputBox from "@/components/base/Input";
import Button from "@/components/base/Button";
import {
  CalendarPlus,
  Clock,
  ImagePlus,
  LocateIcon,
  MapPin,
  Satellite,
} from "lucide-react-native";
import DatePicker from "expo-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEventState } from "@/store/eventStore";
import { useRouter } from "expo-router";
import clsx from "clsx";
import { Image } from "react-native";
import { useUserState } from "@/store/userStore";
import Icon from "@/components/base/Icon";
import MediaEditable from "@/components/event/MediaEditable";
import * as Picker from "expo-image-picker";
import { usePostState } from "@/store/postStore";
const CreateEvent = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { user } = useUserState();

  const { post, mediaList, updateMedia, removeMedia, createPost, update } =
    usePostState();
  const handleMediaPicker = async () => {
    try {
      const file = await Picker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        aspect: [4, 3],
        quality: 0.6,
        allowsMultipleSelection: true,
      });
      //console.log("here are there files and media files ",file.assets,file.canceled)
      if (file.assets?.length && file.assets.length > 0) {
        //  console.log("got assets ")
        updateMedia(file.assets);
      }
    } catch (err) {
      console.log(err, "error at image picker ");
    }
  };
  const isFormValid = mediaList.length > 0 && post.title;
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaWrapper className="bg-violet-100 px-4 flex-1 ">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className="p-2 my-4">
          <Text className="text-2xl text-center text-violet-500 font-bold ">
            Create Post
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{}}
          keyboardShouldPersistTaps="handled"
        >
          <View className=" w-full mx-auto rounded-xl bg-violet-50  ">
            <Button>
              <View className="flex flex-row items-center my-2 mx-3 ml-1 gap-4  p-2 bg-white rounded-2xl">
                <Image
                  source={{ uri: user?.profilePhoto?.url }}
                  className="w-12 h-12 rounded-full"
                />
                <Text className="text-xl font-medium text-black  ">
                  {user?.userName}
                </Text>
              </View>
            </Button>

            <ScrollView className=" gap-4" horizontal={true}>
              {mediaList.length > 0 && (
                <FlatList
                  contentContainerStyle={{ width: width  }}
                  className="  "
                  horizontal={true}
                  scrollEventThrottle={500}
                  keyExtractor={(item, index) => item.uri}
                  data={mediaList}
                  renderItem={({ item }) => (
                    <MediaEditable
                      remove={removeMedia}
                      fileName={item.fileName!}
                      url={item.uri}
                      type={item.type as string}
                    />
                  )}
                />
              )}
              <Icon
                style={{ height: 300, width: width - 20 }}
                className={clsx(" rounded-xl mx-4 bg-violet-200  animate-none")}
              >
                <Button onPress={handleMediaPicker}>
                  <ImagePlus size={80} color="grey" />
                </Button>
              </Icon>
            </ScrollView>

            <InputBox
              style={{ textAlignVertical: "top" }}
              showSoftInputOnFocus
              scrollEnabled
              spellCheck
              onChangeText={(text) => update({ title: text })}
              multiline
              value={post.title}
              placeholder="set the Title "
              className=" p-2 my-2 w-full  bg-gray-50  text-xl text-black  rounded-2xl     "
            />
          </View>
      
        <Button
          disabled={!isFormValid}
          onPress={() => {createPost(); router.push("create-two")}}
          className={clsx(
            " w-[90%] bg-violet-500 px-4 py-2 rounded-2xl mx-auto my-4",
            !isFormValid && "bg-violet-300"
          )}
        >
          <Text className="text-2xl text-white font-semibold text-center">
            Continue
          </Text>
        </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaWrapper>
  );
};

export default CreateEvent;
