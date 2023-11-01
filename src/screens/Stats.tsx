import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainContainer } from "@components";

const Stats = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Text>Stats</Text>
      </View>
    </MainContainer>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
