import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainContainer } from "@components";

const Profile = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </MainContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
