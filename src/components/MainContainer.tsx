import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";

const MainContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height)}
            colors={["#f8b19f", "#ffd9cf", "#fdf5f2", "#ffffff"]}
          />
        </Rect>
      </Canvas>
      <View style={StyleSheet.absoluteFill}>{children}</View>
    </View>
  );
};

export default MainContainer;
