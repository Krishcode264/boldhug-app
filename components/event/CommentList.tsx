import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { comments } from '@/db/db'
import Comment from '@/components/event/Comment'
import InputBox from '@/components/base/Input'

const CommentListView = () => {
  return (
    <>
      <FlatList
        data={comments}
        style={{gap: 4}}
        renderItem={({item: comment}) => {
          return <Comment {...comment} key={comment.id} />;
        }}
      />

      <View className="w-full px-3 rounded-2xl bg-violet-200  mt-2">
        <InputBox
         
          multiline={true}
          className="bg-violet-50 px-2  py-3 text-lg  w-full"
          placeholder="comment something"
        />
      </View>
    </>
  );
}

export default CommentListView