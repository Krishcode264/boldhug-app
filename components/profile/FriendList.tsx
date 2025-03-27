import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FriendListItem from './FriendListItem';
import { User } from '@/constants/Types';






const FriendList = ({users}:{users:User[]}) => {
  return (
    <FlatList
      renderItem={({item: user}) => (
        <FriendListItem name={user.userName} profilePhoto={user.profilePhoto} />
      )}
      contentContainerStyle={{gap: 8, marginHorizontal: 10}}
      data={users}
      className="rounded-md "
    />
  );
}

export default FriendList