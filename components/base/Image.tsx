import {View, Text, type ImageComponent } from 'react-native';
import React, { type FC } from 'react'
import { ImageProps as OrignalImageProps } from 'react-native';
import { cn } from '../../util/functions';
interface Imageprops extends OrignalImageProps {}
const Image:FC<Imageprops>= ({className,...props}) => {
  return (
    <Image
      {...props}
      className={cn('w-full h-full ', className)}
      onError={e => console.error('Image error:', e.nativeEvent.error)}
    />
  );
}

export default Image