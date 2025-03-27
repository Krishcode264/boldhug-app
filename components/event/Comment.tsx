import { View, Text } from 'react-native'
import React, { type FC } from 'react'
import { Image } from 'react-native'
export type CommentProps={
profilePhoto:string;
content:string;
userName:string
}
const Comment:FC<CommentProps> = ({profilePhoto,content,userName}) => {
  return (
    <View className='flex flex-row gap-2 mb-3 p-1 items-start w-[90%] ' >
    <Image source={{uri:profilePhoto}} className='w-[36px] h-[36px] rounded-full' />
    <View className='flex flex-col w-[95%]'>
        <Text className='text-slate-600 text-sm'>{userName}</Text>
        <Text className='text-sm'>{content}</Text>
    </View>
    </View>
  )
}

export default Comment