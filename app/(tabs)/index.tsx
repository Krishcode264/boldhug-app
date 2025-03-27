import {View, Text, Image, StatusBar, Modal, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';



import {ScrollView} from 'react-native';

import {FlatList} from 'react-native';
import AppLogo from '@/assests/logos/BoldHug.svg';
import {VideoDecoderProperties} from 'react-native-video';
import VideoPlayer from '@/components/custum/VideoPlayer';
import {eventsdata} from '@/db/db';
import Drawer from '@/components/custum/Drawer';
import {cn} from '@/util/functions';
import Button from '@/components/base/Button';

import EventPost from '@/components/event/EventPost';
import { events } from '../../db/event';
import { useUserState } from '@/store/userStore';
import CommentListView from '@/components/event/CommentList';
import SearchBar from '@/components/event/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = () => {
  const {
  user
  } = useUserState();

  const [CommentView, setCommentView] = useState<boolean>(false);


  return (
    <SafeAreaView className=" h-full  bg-white ">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View className="flex   flex-row items-center mb-4">
        <SearchBar />
      </View>

      {CommentView && (
        <Drawer
          onClose={() => setCommentView(false)}
          children={<CommentListView />}
        />
      )}

      <FlatList
        className="  "
        renderItem={({item}) => (
          <EventPost eventPost={item} toggleCommentDrawer={setCommentView} />
        )}
        data={eventsdata}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
