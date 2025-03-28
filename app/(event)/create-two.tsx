import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/base/SafeAreaWrapper";
import { Event, EventInfoTag } from "@/components/event/Event";
import { useEventState } from "@/store/eventStore";
import Button from "@/components/base/Button";
import Joines from "@/components/event/Joines";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import { ArrowLeft, ImagePlus, MapPin } from "lucide-react-native";
import { useUserState } from "@/store/userStore";
import { ScrollView } from "react-native";
import Icon from "@/components/base/Icon";
import * as Picker from "expo-image-picker";
import EventMediaAttachment from "@/components/event/EventMediaAttachment";
import clsx from "clsx";
import MediaEditable from "@/components/event/MediaEditable";
import { useApi } from "@/hooks/axios";
import api from "@/util/axios";
import { sendtoS3 } from "@/util/functions";
const CreateTwo = () => {
  const { event, mediaList, updateMedia, removeMedia ,createEvent} = useEventState();
  const router = useRouter();
  const { user } = useUserState();

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
  const { width, height } = Dimensions.get("window");

// const handleCreateEvent = async () => {
//     try {
//       const eventResponse = await api.post("/event", { event });
//       if (eventResponse.data.success) {
//         const getSignedUrls = await api.post("/media/preurl", {
           
//             data: mediaList.map((media) => ({
//               type: media.type,
//               fileName: media.fileName,
//             })),
//             mediaGroupId: eventResponse.data.event.id,
//             mediaGroupType: "event",
          
//         });
//         if (getSignedUrls.data.urlArray) {
//           console.log("we got the array of signed urls ")
//           const alldata = await sendtoS3({
//             media: mediaList,
//             urlArray: getSignedUrls.data.urlArray,
//           });
//           console.log("we sent it to s3 just heyyy ")
//           if (alldata) {
//              const finalres=await api.post("/media/confirm",{data:alldata,mediaGroupId:eventResponse.data.event.id,parentType:"event"})
//              if(finalres.data.success){
//               console.log("hey all done bro chill here , confirmation done ")
//              }
//           }
//         }
//       }
//     } catch(err) {
//       console.log("something got wrong",err)
//     }
//   };
  return (
    <SafeAreaWrapper className="bg-gray-100 px-2 flex-1 ">
      <View className="w-full  bg-gray-100 shadow-slate-800  p-1 rounded-md flex gap-2">
        <Button
          onPress={() => {
            // router.push({ pathname: "(profile)/123" });
          }}
        >
          <View className="flex-row items-center gap-4 px-2 py-1.5 rounded-2xl bg-gray-200">
            <Image
              className="w-12 h-12  rounded-full "
              source={{ uri: user?.profilePhoto?.url }}
            />
            <Text className="text-lg font-semibold">{user?.userName}</Text>
          </View>
        </Button>

        <Text className="font-bold text-lg px-2  w-[95%]">{event.title}</Text>
        <ScrollView className=" w-full ">
          <Text className=" px-2  w-[95%] ">{event.description}</Text>
        </ScrollView>

        <ScrollView className="" horizontal={true}>
          <FlatList
            className=" "
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
          <Icon
            style={{ height: 300, width: width - 20 }}
            className={clsx(" rounded-xl bg-violet-200  animate-none")}
          >
            <Button onPress={handleMediaPicker}>
              <ImagePlus size={80} color="grey" />
            </Button>
          </Icon>
        </ScrollView>

        <View className="flex-row items-center p-1 px-2  gap-2 ">
          <MapPin color={"black"} width={25} height={25} />
          <Text className="">{event.location}</Text>
        </View>
        <View className="flex-row gap-3  flex-wrap px-2">
          <EventInfoTag info={`${event.reservedSlots} / ${event.slots}`} />
          <EventInfoTag info={event.time} />
          <EventInfoTag info={event.date.toDateString()} />

          <View></View>
        </View>
      </View>
      <Button
        className=""
        onPress={() => {
          router.back();
        }}
      >
        <ArrowLeft color={"darkviolet"} size={35} />
      </Button>
      <Button
        onPress={()=>{
          createEvent()
          router.push("/create-three")
        }}
        className={clsx(
          " w-[90%] bg-violet-500 px-4 py-3 rounded-2xl mx-auto my-4"
        )}
      >
        <Text className="text-2xl text-white font-semibold text-center">
          Create Event
        </Text>
      </Button>
    </SafeAreaWrapper>
  );
};

export default CreateTwo;
