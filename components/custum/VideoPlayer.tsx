import { ResizeMode, Video } from "expo-av";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { MediaItem } from "@/store/chatStore";
import { VideoRef } from "react-native-video";
import Button from "../base/Button";
import { Dimensions } from "react-native";
import {
  CirclePause,
  CirclePlay,
  LoaderPinwheel,
  Maximize,
  SkipBack,
  SkipForward,
} from "lucide-react-native";
const { width, height } = Dimensions.get("screen");
import Slider from "@react-native-community/slider";
const aspectRatio = width > height ? 16 / 9 : 9 / 16;
const videoHeight = width / aspectRatio;

export default function VideoPlayer({ uri }: MediaItem) {
  const video = useRef(null);
  const status = useRef({
    positionMillis: 0,
    playableDurationMillis: 0,
    isPlaying: false,
  });
  const [showControl, setShowControl] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(false);
  const lastUpdateTimeRef = useRef(Date.now());
  const [isDragging, setIsDragging] = useState(false);


  // const togglePlayPause = async () => {
  //   if (video.current) {
  //     console.log("video ref here it is ", play);
  //     play ? video.current.pauseAsync() : video.current.playAsync();
  //     setPlay((prev) => !prev);
  //   }
  // };

  // const seekVideo = async (value) => {
  //   if (!video.current) return;
  //   await video.current?.setPositionAsync(value);
  // };

  useEffect(() => {
    if (video && video.current) {
      // console.log("video data ", videoRef.current);
    }
  }, []);

  return (
    <View className="  w-[100%]  h-[100%]  " style={{ }}>
      <Video
        style={[VideoStyles.video,{}]}
        ref={video}
        source={{ uri:uri as string }}
        useNativeControls={true}
        resizeMode={ResizeMode.COVER}
        onTouchStart={() => {
          setShowControl((prev) => !prev);
        }}
        
        onLoad={(e) => {
         // console.log("loaded", e);

          setLoaded(true);
        }}
     
        shouldPlay={false} // Will not auto-play
      />

      {/* {!loaded && (
        <View className="w-full h-full flex-1 justify-center items-center bg-black">
          {" "}
          <LoaderPinwheel size="50" color="white" />{" "}
        </View>
      )}

      {showControl && (
        <>
          <View
            className="bottom-0 absolute  h-24 w-[100%] bg-black opacity-60  "
            style={{ marginHorizontal: "auto" }}
          >
            <View className="flex items-center flex-row justify-between">
              <View className="flex-1 flex flex-row justify-center items-center gap-4">
                <Button>
                  <SkipBack size={25} color={"white"} />
                </Button>

                {play ? (
                  <>
                    <Button onPress={togglePlayPause}>
                      <CirclePause size={35} color={"white"} />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onPress={togglePlayPause}>
                      <CirclePlay size={35} color={"white"} />
                    </Button>
                  </>
                )}

                <Button>
                  <SkipForward size={25} color={"white"} />
                </Button>
              </View>
              <Button className="flex-[0.1]">
                <Maximize size={20} color="white" />
              </Button>
            </View>

            <Slider
              maximumValue={status.current.playableDurationMillis || 1}
              value={isDragging ? null : status.current.positionMillis}
              onSlidingStart={() => setIsDragging(true)}
              onSlidingComplete={(value) => {
                seekVideo(value);
                setIsDragging(false);
              }}
              minimumTrackTintColor="white"
              maximumTrackTintColor="white"
              thumbTintColor="violet"
              style={{ height: 0, width: "100%" }}
            />
          </View>
        </>
      )} */}
    </View>
  );
}

export const VideoStyles = StyleSheet.create({
  video: {
    width: width,
    height: "100%",
    borderRadius: 5,
    marginHorizontal: "auto",
  },
});
