import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation/index";
import { Provider } from "react-redux";

import store from "./app/store";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
