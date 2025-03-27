import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import SafeAreaWrapper from "@/components/base/SafeAreaWrapper";
import InputBox from "@/components/base/Input";
import Button from "@/components/base/Button";
import { CalendarPlus, Clock, LocateIcon, MapPin, Satellite } from "lucide-react-native";
import DatePicker from "expo-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEventState } from "@/store/eventStore";
import { useRouter } from "expo-router";
import clsx from "clsx";

const CreateEvent = () => {
    const {event,update}=useEventState()
  const [show, setShow] = useState(false);
   const router=useRouter()
  const isFormValid = Object.values(event).every((value) => value.toString().trim() !== "");
  return (
    <SafeAreaWrapper className="bg-violet-100 px-4 flex-1 ">
         <KeyboardAvoidingView
       
           behavior={Platform.OS === "ios" ? "padding" : "height"} 
           style={{ flex: 1 }} >
       
      <View className="p-2 my-4">
        <Text className="text-2xl text-center text-violet-500 font-bold ">
          Create Event
        </Text>
      </View>
      <ScrollView 
          contentContainerStyle={{  }} 
          keyboardShouldPersistTaps="handled"
        >
      <Button className="w-full mt-4 mr-auto  h-32 p-0  bg-violet-200 my-2">
        {/* <Text className="text-xl">Title...</Text> */}
        <InputBox
        style={{textAlignVertical:"top"}}
        showSoftInputOnFocus
        scrollEnabled
        spellCheck
        onChangeText={(text)=> update({title:text})}
        multiline
        value={event.title}
        placeholder="set the Title "
        className=" h-full    w-full text-xl text-black  rounded-2xl     "
     
    
      />
      </Button>
      <Button className=" w-full  mr-auto p-4 h-52  bg-violet-200 my-2">
        {/* <Text className="text-xl">Description...</Text> */}
        <InputBox
        style={{textAlignVertical:"top"}}
        showSoftInputOnFocus
        scrollEnabled
        spellCheck
        onChangeText={(text)=> update({description:text})}
        multiline
        value={event.description}
        placeholder="Description..."
        className=" h-full  text-   w-full text-xl text-black  rounded-2xl     "
     />
      </Button>

      <Button className=" w-full  mr-auto p-4 flex flex-row gap-2 items-center bg-violet-200 my-2">
        <MapPin color={"black"} size={30} /> 
        <InputBox
        style={{textAlignVertical:"top"}}
        showSoftInputOnFocus
        scrollEnabled
        spellCheck
        multiline
        onChangeText={(text)=> update({location:text})}
        value={event.location}
        placeholder=""
        className=" h-full  text-   w-full text-xl text-black  rounded-2xl     "
     />
      </Button>

      <Button className=" w-full  mr-auto p-4 flex flex-row gap-2 items-center bg-violet-200 my-2">
        <Text className="text-xl">Total slots :</Text>
        <InputBox
        inputMode="numeric"
        style={{textAlignVertical:"top"}}
        showSoftInputOnFocus
        onChangeText={(v)=> update({slots:Number(v)})}
        value={event.slots.toString()}
        placeholder=""
        className=" h-full  text-   w-full text-xl text-black  rounded-2xl     "
     />
         </Button>
      <Button onPress={()=> {setShow(true)}} className=" w-full  mr-auto p-4 flex flex-row gap-2 items-center bg-violet-200 my-2">
        <CalendarPlus size={30} color="black" />
       <Text className="text-xl font-medium mx-4">{event.date.toLocaleDateString()}</Text>
      </Button>
      <Button  className=" w-full  mr-auto p-4 flex flex-row gap-2 items-center bg-violet-200 my-2">
        <Clock size={30} color="black" />
        <InputBox
        inputMode="text"
        style={{textAlignVertical:"top"}}
        showSoftInputOnFocus
        scrollEnabled
        spellCheck
        multiline
        onChangeText={(text)=> update({time:text})}
        value={event.time}
        placeholder="eg: 4pm to 6pm "
        className=" h-full  text-   w-full text-xl text-black  rounded-2xl     "
     />
      </Button>
      
      {show && (
        <DateTimePicker value={event.date} mode="date" display="default" onChange={(e,state)=>{
          console.log("date time",state)
            setShow(false)
            update({date:state})
        }} />
      )}
        
        </ScrollView>
      <Button disabled={!isFormValid} onPress={()=>router.push("create-two")} className={clsx(" w-[90%] bg-violet-500 px-4 py-2 rounded-2xl mx-auto my-4",!isFormValid && "bg-violet-300")}>
        <Text className="text-2xl text-white font-semibold text-center">
          Continue
        </Text>
      </Button>
     
      </KeyboardAvoidingView>
    </SafeAreaWrapper>
  );
};

export default CreateEvent;
