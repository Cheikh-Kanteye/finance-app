import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MonthlyData } from "src/misc";
import { PaymentHistory } from "src/misc/Bills";

export type TabParamList = {
  Home: undefined;
  Stats: undefined;
  Scan: undefined;
  Wallet: undefined;
  Profile: undefined;
};

export type StackParamList = {
  Tabs: undefined;
  BillingDetails: {
    bill: MonthlyData;
  };
  BillHistory: {
    service: string;
    logoUrl: string;
    history: PaymentHistory;
  };
};

export type HomeStackNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  NativeStackNavigationProp<StackParamList, "Tabs">
>;
