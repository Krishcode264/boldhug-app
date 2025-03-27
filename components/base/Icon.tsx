import { View, Text, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'
import { cn } from '@/util/functions'

interface IconProps extends ViewProps{
  
    
}

const Icon = ({className,...props}:IconProps) => {
  return (
    <View className={cn("animate-spin w-16 h-16 flex items-center justify-center ",className)} {...props}>
      
    </View>
  )
}

export default Icon