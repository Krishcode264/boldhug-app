import { View, Text, Image, StatusBar, Modal, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { FlatList } from "react-native";

import Drawer from "@/components/custum/Drawer";

import EventPost from "@/components/event/EventPost";
import { useUserState } from "@/store/userStore";
import CommentListView from "@/components/event/CommentList";
import SearchBar from "@/components/event/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "@/util/axios";
import { useQuery } from "@tanstack/react-query";
import FeedLoader from "@/components/animated/FeedLoader";
const HomeScreen = () => {

  const [CommentView, setCommentView] = useState<boolean>(false);

  const { isLoading, data, error, isError } = useQuery({
    queryFn: async () => {
      const response = await api.get(`/post/random`);
      // console.log(response.data.posts[0], "here are the posts");
      return response.data.posts;
    },
    queryKey: [`posts`],
  });


  return (
    <SafeAreaView className=" h-full  bg-white ">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View className="flex   flex-row items-center mb-4">
        <SearchBar />
      </View>

{
  isLoading &&  (<FeedLoader/>)
}
      {CommentView && (
        <Drawer
          onClose={() => setCommentView(false)}
          children={<CommentListView />}
        />
      )}
   
       
      { !isLoading  &&  (data.length > 0 )? (
        <FlatList
          className="  "
          renderItem={({ item }) => (
            <EventPost eventPost={item} toggleCommentDrawer={setCommentView} />
          )}
          data={data}
        />
      ):(<Text className="text-center mt-12 ">no posts found 😓 , we are working on it ...</Text>)}
    </SafeAreaView>
  );
};

export default HomeScreen;
