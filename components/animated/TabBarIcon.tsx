import {View, Text, Pressable, type GestureResponderEvent} from 'react-native';
import React, {type FC, type ReactNode} from 'react';
import Animated, {
  useSharedValue,
  withSequence,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
type TabBarIconType={
  props?:BottomTabBarButtonProps,
  children?:ReactNode
}
const TabBarIcon:FC<TabBarIconType> = ({children,props}) => {
  const scale = useSharedValue(1);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const handlePress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => {
    scale.value = withSequence(
      withTiming(0.8, {duration: 100}),
      withTiming(1.1, {duration: 150}),
      withTiming(1, {duration: 120}),
    );
    props?.onPress?.(e);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));
  return (
    <AnimatedPressable
      {...props}
      android_ripple={null}
      className="flex  flex-col flex-1 justify-center   items-center"
      onPress={handlePress}
      style={[{}, animatedStyles]}>
   
       {props?.children || children}
      </AnimatedPressable>
  );
};

export default TabBarIcon;
