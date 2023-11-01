import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { AppNavigator } from "./Routes/AppNavigator";
import store from "./state-management/store";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RB: require("./assets/Fonts/Roboto-Black.ttf"),
    RBB: require("./assets/Fonts/Roboto-Bold.ttf"),
    RL: require("./assets/Fonts/Roboto-Light.ttf"),
    RR: require("./assets/Fonts/Roboto-Regular.ttf"),
    RM: require("./assets/Fonts/Roboto-Medium.ttf"),
  });

  return fontsLoaded ? (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  ) : null;
}
