import { View, Text, TextInput, type StyleProp, type TextInputProps } from 'react-native'
import React, { type FC, type ReactNode } from 'react'
import { cn } from '../../util/functions'


interface InputBoxProps extends TextInputProps  {
  


}
const InputBox:FC<InputBoxProps> = ({className,...props}) => {
  return (
    <TextInput
      keyboardAppearance="default"
      {...props}
      className={cn(' px-3   w-[90%]   mx-auto rounded-md ', className)}
    />
  );
}


export default InputBox