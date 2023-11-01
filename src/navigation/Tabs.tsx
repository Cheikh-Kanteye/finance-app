import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "./types";
import { Home, Profile, Scan, Stats, Wallet } from "@screens";
import { BottomTab, TabScanBtn } from "@components";
import { Image, StyleSheet, View } from "react-native";
import { icons } from "@assets";

const Tab = createBottomTabNavigator<TabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabContainer,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FD5E37",
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: "transparent",
        elevation: 0,
        borderWidth: 0,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={[styles.icon, { tintColor: color }]}
              source={focused ? icons.home : icons.homeO}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Stats"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={[styles.icon, { tintColor: color }]}
              source={focused ? icons.stats : icons.statsO}
            />
          ),
        }}
        component={Stats}
      />
      <Tab.Screen
        name="Scan"
        options={{
          tabBarButton: () => <TabScanBtn />,
        }}
        component={Scan}
      />
      <Tab.Screen
        name="Wallet"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={[styles.icon, { tintColor: color }]}
              source={focused ? icons.wallet : icons.walletO}
            />
          ),
        }}
        component={Wallet}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={[styles.icon, { tintColor: color }]}
              source={focused ? icons.profile : icons.profileO}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "transparent",
    elevation: 0,
    borderTopWidth: 0,
  },
  tabBtn: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
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
