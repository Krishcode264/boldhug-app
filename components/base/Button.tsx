import {
  View,
  Text,
  Pressable,
  type PressableProps,

} from 'react-native';
import React, {type FC, type ReactNode} from 'react';

import { cn } from '@/util/functions';
import type { TouchableProps } from 'react-native-svg';
interface ButtonProps extends PressableProps {
  textStyle?: string;
  title?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({children,className,title,textStyle,...props}) => {
  return (
    <Pressable
      {...props}
      className={cn('   rounded-md p-2   ', className)}>
      {children ? (
        children
      ) : (
        <Text className={cn('text-center px-1.5 py-1', textStyle)}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
