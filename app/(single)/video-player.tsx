import { View, Text } from 'react-native'
import React from 'react'
import VideoPlayer from '@/components/custum/VideoPlayer'
import { SafeAreaView } from 'react-native-safe-area-context'

const VideoPlayerScreen= () => {
  return (
    <SafeAreaView>
      <VideoPlayer type='video' uri='https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'/>
    </SafeAreaView>
  )
}

export default VideoPlayerScreen