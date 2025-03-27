import { View, Text, Image } from 'react-native'
import React from 'react'
import {} from "expo"
import BlodHug from "@/assets/logos/BoldHug.svg"
const photo=require("@/assets/logos/BoldHug.png")
const BrandLogo = () => {
  return (
    <View className='  mx-auto w-full p-0 m-0  flex items-center justify-center '>
     
      <BlodHug  width={200} height={200} className='' />
     
     
      
    </View>
  )
}

export default BrandLogo