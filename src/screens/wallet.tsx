import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainContainer } from "@components";

const Wallet = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Text>Wallet</Text>
      </View>
    </MainContainer>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
