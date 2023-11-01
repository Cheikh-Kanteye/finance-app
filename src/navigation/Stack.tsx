import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./types";
import Tabs from "./Tabs";
import { BillHistory, BillingDetails } from "@screens";

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="BillingDetails" component={BillingDetails} />
      <Stack.Screen name="BillHistory" component={BillHistory} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
