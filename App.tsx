import React from "react";
import { Navigator } from "./src";
import * as Navbar from "expo-navigation-bar";

Navbar.setBackgroundColorAsync("#fff");

const App = () => {
  return <Navigator />;
};

export default App;
