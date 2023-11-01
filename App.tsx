import React from "react";
import { Navigator } from "./src";
import * as Navbar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

Navbar.setBackgroundColorAsync("#fff");

const App = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" />
      <Navigator />
    </>
  );
};

export default App;
