import { View, Text, SafeAreaView, ViewProps } from 'react-native'
import React from 'react'
import { cn } from '@/util/functions'
import Icon from './Icon'
import { LoaderPinwheelIcon } from 'lucide-react-native'

interface  LoadingScreenProps extends ViewProps{
           text?:string
}
const LoadingScreen = ({className,children,text,...props}:LoadingScreenProps) => {
  return (
    <SafeAreaView className={cn("flex-1 p-4 ",className)} {...props}>
         <Icon className='mx-auto mb-4'>
      <LoaderPinwheelIcon  size={60} color={"violet"} className="" />
      </Icon>
      <Text className='text-center'>
        {text }
      </Text>
   
    </SafeAreaView>
  )
}

export default LoadingScreen