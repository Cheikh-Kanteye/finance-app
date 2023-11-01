import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { icons } from "@assets";

const TabButton: React.FC<{ name: string }> = ({ name }) => {
  const [icon, setIcon] = useState<ImageSourcePropType>(0);

  // useEffect(() => {
  //   switch (name) {
  //     case "Home":
  //       setIcon(icons.home);
  //       break;
  //     case "Stats":
  //       setIcon(icons.stats);
  //       break;
  //     case "Wallet":
  //       setIcon(icons.wallet);
  //       break;
  //     case "Profile":
  //       setIcon(icons.profile);
  //       break;
  //     default:
  //       setIcon(0);
  //       break;
  //   }
  // }, []);

  return (
    <TouchableOpacity style={styles.tabBtn}>
      <Image source={icon} style={styles.icon} />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const ScanBtn = () => {
  return (
    <TouchableOpacity style={styles.tabBtn}>
      <View style={styles.scan}>
        <Image
          source={icons.scan}
          resizeMode="contain"
          style={styles.scanImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const BottomTab: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const [routes, setRoutes] = useState<typeof state.routes>();
  useEffect(() => {
    const updateRoutes = [...state.routes];

    updateRoutes.splice(Math.floor(updateRoutes.length / 2), 0, {
      key: "scan",
      name: "scan",
    });

    setRoutes(updateRoutes);
  }, []);

  return (
    <View style={styles.tabContainer}>
      {routes?.map((route, index) => {
        return route.name == "scan" ? (
          <ScanBtn key={route.name + index} />
        ) : (
          <TabButton name={route.name} key={route.name + index} />
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  tabBtn: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scan: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: "red",
  },
  scanImage: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
