import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabs";

const Navigation = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);

export default Navigation;
