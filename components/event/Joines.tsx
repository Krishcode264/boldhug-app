import clsx from 'clsx';
import React from 'react'
import { Image, Text, View } from 'react-native'

type JoinesProps={
    id:string|number;
    name:string;
    profile_photo:string
}[]
let data:JoinesProps=[
    {
      "id": 1,
      "name": "John Doe",
      "profile_photo": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      "id": 2,
      "name": "Alice Smith",
      "profile_photo": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "profile_photo": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "profile_photo": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      "id": 5,
      "name": "David Brown",
      "profile_photo": "https://randomuser.me/api/portraits/men/5.jpg"
    }
  ]
  
const Joines = () => {
  return (
    <View className='flex flex-row  '>
      <View className='flex flex-row items-center  justify-center  ' >
      {
        data.map((profilePhoto,index)=>{
            return(
                <Image key={profilePhoto.id} className={clsx("w-10 h-10  rounded-full border-2 border-violet-400",index!==0 && "ml-[-14]") } source={{uri:profilePhoto.profile_photo}}/>
            )
        })
      } 
      </View>
  <Text className=' my-auto'> + 3 more </Text>
        
    </View>
  )
}

export default Joines