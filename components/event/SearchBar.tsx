import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import InputBox from '@/components/base/Input'

import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'
import { EasingNameSymbol } from 'react-native-reanimated/lib/typescript/Easing'
const {width: SCREEN_WIDTH} = Dimensions.get('window');
import { Easing } from 'react-native-reanimated'
import { Search } from 'lucide-react-native'
const SearchBar = () => {
const searchSuggestions:string[] = [
  'Find someone to watch a movie',
  'Looking for a badminton partner',
  'Try a new recipe together',
  'Nearby hiking buddies',
  'Host a game night',
  'Attend a community yoga session',
  'Plan a book club meeting',
  'Start a photography walk',
  'Organize a local cleanup drive',
  'Cooking workshops for two',
  'Plan a picnic at the park',
  'Weekend road trips with friends',
  'Join a coding study group',
  'Volunteer opportunities nearby',
  'Find someone to try a new restaurant',
  'Online brainstorming sessions',
  'Plan a movie marathon night',
  'Partner for language practice',
  'Explore local food festivals',
  'Set up a small board game session',
  'Share fitness goals with a buddy',
  'Collaborate on a creative project',
  'Host a wine-tasting evening',
  'Local sports leagues and matches',
  'Plan a musical jam session',
];

const AnimatedSuggestions=()=>{
return (
  <View className=" absolute border overflow-hidden left-3 flex flex-col gap-8 animateSearchBar">
    {searchSuggestions.map(s => {
      return <Text key={s}>{s}</Text>;
    })}
  </View>
);
}
const scalex=useSharedValue(1)
const width=useSharedValue(300)
const AnimatedStayles = useAnimatedStyle(() => ({

  width: width.value
}));
  useEffect(() => {
    width.value = withTiming(SCREEN_WIDTH*0.90, {duration: 800});
  }, []);
  return (
    <Animated.View
      className="flex relative items-center flex-row justify-center mt-2 mx-auto px-4  text-lg text-white font-semibold rounded-full   bg-violet-500   shadow-l"
      style={[{}, AnimatedStayles]}>
      <InputBox
        className="  h-14 border-none text-white font-bold text-xl  "
        placeholderTextColor="white"
          
        placeholder={
          searchSuggestions[
            Math.floor(Math.random() * searchSuggestions.length)
          ]
        }
      />
      
        <Search color="white" width={26} height={26} className="mx-4" />
   
    </Animated.View>
  );
}

export default SearchBar