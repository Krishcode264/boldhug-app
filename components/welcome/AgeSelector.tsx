import React, { useRef } from "react";
import { View, Text, ScrollView, Animated, Dimensions } from "react-native";

const AgeSelector = () => {
  const scrollX = useRef(new Animated.Value(0)).current; // Tracks scroll position
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = 100; // Each item's width
  const SPACER_WIDTH = (SCREEN_WIDTH - ITEM_WIDTH) / 2; // Adjust to center first item
  const ages = Array.from({ length: 100 }, (_, i) => i + 1); // Age array

  return (
    <View className="w-full">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH} // Ensures snapping effect
        decelerationRate="fast"
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: SPACER_WIDTH }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {ages.map((age, index) => {
          // Calculate scale and color based on scroll position
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1], // Center item grows
            extrapolate: "clamp",
          });
          const color = scrollX.interpolate({
            inputRange,
            outputRange: ["#999", "#FF5733", "#999"], // Change color
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={{
                height: 100,
                width: ITEM_WIDTH,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ scale }],
              }}
            >
              <Animated.Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color,
                }}
              >
                {age}
              </Animated.Text>
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AgeSelector;
