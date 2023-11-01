import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "src/navigation/types";

type BillHisstoryRouteProp = RouteProp<StackParamList, "BillHistory">;

const BillHistory = () => {
  const {
    params: { history, logoUrl, service },
  } = useRoute<BillHisstoryRouteProp>();
  return (
    <View style={styles.container}>
      <Image source={{ uri: logoUrl }} style={{ width: 48, height: 48 }} />
      <Text>{service}</Text>
    </View>
  );
};

export default BillHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
