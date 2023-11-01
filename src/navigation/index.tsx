import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";
import StackNavigator from "./Stack";

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
