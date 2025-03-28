import {View, Text, Image} from 'react-native';
import React, {
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from 'react';
import Button from '@/components/base/Button';



import {FlatList} from 'react-native';

import { Heart, MessageCircle, Navigation, Share2 } from 'lucide-react-native';

import EventMediaAttachment from './EventMediaAttachment';
import { useRouter } from 'expo-router';
const PostStats = ({
  stats: {likes, shares, comments},
  toggleCommentDrawer,
}: {
  stats: Stats;
  toggleCommentDrawer: Dispatch<SetStateAction<boolean>>;
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <View className="flex flex-row gap-2 ">
      <Button
        className="flex flex-row gap-1 items-center"
        onPress={() => {
          setLiked(prev => !prev);
        }}>
        <Heart
          width={25}
          height={25}
          strokeWidth={1}
          stroke={liked ? '' : 'black'}
          fill={liked ? 'red' : 'white'}
        />

        <Text className="text-sm">{likes}</Text>
      </Button>
      <Button
        onPress={() => {
          toggleCommentDrawer(prev => true);
        }}
        className="flex flex-row gap-1 items-center ">
        <MessageCircle stroke={"black"} fill={"white"}  width={25} height={25} strokeWidth={1} />
        <Text className="text-sm">{comments}</Text>
      </Button>
      <Button className="flex flex-row gap-1 items-center">
        <Share2  fill={"white"} width={25} height={25} strokeWidth={1} stroke={"black"} />
        <Text className="text-sm">{shares}</Text>
      </Button>
    </View>
  );
};

export type Attachment = {
  type: string | 'image' | 'video';
  url: string;
  id:string
};
export type Stats = {
  likes: number;
  comments: number;
  shares: number;
};
export type EventPostType = {
  author:{
    userName:string;
    id:string;
    profilePhoto:{url:string};
  }
 
  title: string;
  tags: string[];
  attachment: Attachment[];
  likes:number;
  createdAt:string;
};
export type EventPostProps = {
  eventPost: EventPostType;
  toggleCommentDrawer: Dispatch<SetStateAction<boolean>>;
};
const EventPost: FC<EventPostProps> = ({eventPost, toggleCommentDrawer}) => {

  const router=useRouter()
  return (
    <View className=" w-auto  rounded-xl bg-violet-50 mb-2 p-1 pb-8">
      <Button onPress={()=>{ 
       // console.log("clcikedr")
       router.push(`(profile)/${eventPost.author.id}`)
          //  navigator.navigate("ProfileTabs",{
          //    screen:"GuestProfile",
          //    params:{...UserprofileData,name:eventPost.userName,profilePhoto:eventPost.profilePhoto as string}
          //   })
      }}>
      <View className="flex flex-row items-center my-2 mx-3 ml-1 gap-4  p-2 bg-white rounded-2xl">
        <Image
          source={{uri:eventPost?.author?.profilePhoto.url}}
          className="w-12 h-12 rounded-full"
        />
        <Text className="text-xl font-medium text-black  ">
          {eventPost?.author?.userName}
        </Text>
      </View>
      </Button>
   
      {eventPost?.attachment?.length > 0 && (
        <FlatList
          horizontal={true}
          scrollEventThrottle={500}
          keyExtractor={(item, index) => item.url}
          data={eventPost.attachment}
          renderItem={({item}) => (
            <EventMediaAttachment id={item.id} url={item.url} type={item.type} />
          )}
        />
      )}

      <Text className="mt-1 px-2 text-xl font-medium  text-pretty text-slate-600">
        {eventPost?.title}
      </Text>
      <PostStats
        stats={{likes:eventPost.likes,shares:0,comments:10}}
        toggleCommentDrawer={toggleCommentDrawer}
      />
      <Text style={{textAlign:"right",marginHorizontal:2}} className='my-0 text-xs'> {new Date(eventPost.createdAt).toDateString()}</Text>
    </View>
  );
};

export default EventPost;
