import { View, Text } from 'react-native'
import React, { type Component, type ComponentType, type ElementType, type FC, type ReactNode } from 'react'
import Animated from 'react-native-reanimated'
export type AnimatedProps = {
  child:ComponentType<any>;
};
const TransformY:FC<AnimatedProps> = ({child:AnimatedChildComponent}) => {
   
  return <AnimatedChildComponent  />;
}

export default TransformY