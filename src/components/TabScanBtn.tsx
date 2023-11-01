import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Canvas,
  LinearGradient,
  RoundedRect,
  Shadow,
  vec,
  Image,
  useImage,
  Mask,
  Rect,
  rect,
} from "@shopify/react-native-skia";

const TabScanBtn = () => {
  const icon = useImage(require("../assets/icons/scan.png"));
  if (icon == null) return null;
  return (
    <TouchableOpacity style={styles.tabBtn}>
      <Canvas style={styles.tabBtn}>
        <RoundedRect
          x={12.5}
          y={12.5}
          width={50}
          height={50}
          r={25}
          color={"#FD5E37"}
        >
          <Shadow dx={0} dy={2} blur={6} color={"#FD5E37"} />
          <Shadow dx={0} dy={-2} blur={6} color={"#F9EDED"} />
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, 120)}
            colors={["#FD5E37", "#fcdfdf"]}
          />
        </RoundedRect>

        <Mask
          mode="alpha"
          mask={
            <Image
              image={icon}
              x={26}
              y={26}
              width={24}
              height={24}
              fit={"contain"}
            />
          }
        >
          <Rect rect={rect(0, 0, 300, 300)} color={"white"} />
        </Mask>
      </Canvas>
    </TouchableOpacity>
  );
};

export default TabScanBtn;

const styles = StyleSheet.create({
  tabBtn: {
    width: 80,
    height: 80,
  },
  scanImage: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
});
