import { View, Text } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../base/SafeAreaWrapper'
import Icon from '../base/Icon'
import { Loader } from 'lucide-react-native'

const FeedLoader = () => {
  return (
    <SafeAreaWrapper className='m-8 mx-auto'>
     <Icon className="mx-auto">
          <Loader size={30} color="violet" />
        </Icon>
    </SafeAreaWrapper>
  )
}

export default FeedLoader