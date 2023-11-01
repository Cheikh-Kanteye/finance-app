import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BalanceCard,
  ContactList,
  MainContainer,
  MonthlyBill,
  RecentHistory,
} from "@components";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "@assets";
import { ContactData, MONTHLY_BILLS, MonthlyData, User } from "src/misc";
import { StackParamList, TabParamList } from "src/navigation/types";

const Home = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [monthlyBills, setMonthlyBills] = useState<MonthlyData[] | null>(null);
  const [bill, setBill] = useState<MonthlyData>(MONTHLY_BILLS[0]);

  useEffect(() => {
    setUsers(ContactData);
    setMonthlyBills(MONTHLY_BILLS);
  }, []);

  return (
    <MainContainer>
      <SafeAreaView style={styles.container}>
        {/* ===================HEADER SECTION==================== */}
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <View style={styles.header}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="text" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Morning, Bunny
            </Text>
            <View style={styles.avatarContainer}>
              <Image
                source={images.avatar}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* ====================Contact List for Quick Transfer====================== */}
          <ContactList users={users} />

          {/* ===========================Balance Card================================= */}
          <BalanceCard />

          {/* ===========================Monthly Bills */}
          <MonthlyBill setBill={setBill} data={monthlyBills} />

          {/* ============================Recent History============================== */}
          <RecentHistory label="Monthly Bills" bill={bill} />
        </ScrollView>
      </SafeAreaView>
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight: 80,
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FD5E37",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
});
