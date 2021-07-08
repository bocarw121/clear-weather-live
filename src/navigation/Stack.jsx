import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import { screenOptions } from "./screenOptions";
import CurrentScreen from "../screens/CurrentScreen";
import HourlyScreen from "../screens/HourlyScreen";
import WeeklyScreen from "../screens/WeeklyScreen";

const CurrentStack = createStackNavigator();

export const CurrentNavigator = () => {
  return (
    <CurrentStack.Navigator
      headerMode={Platform.OS == "android" ? "screen" : "float"}
      screenOptions={screenOptions}
    >
      <CurrentStack.Screen name="Current Weather" component={CurrentScreen} />
    </CurrentStack.Navigator>
  );
};

const HourlyStack = createStackNavigator();

export const HourlyNavigator = () => {
  return (
    <HourlyStack.Navigator
      headerMode={Platform.OS == "android" ? "screen" : "float"}
      screenOptions={screenOptions}
    >
      <HourlyStack.Screen name="Hourly Weather" component={HourlyScreen} />
    </HourlyStack.Navigator>
  );
};

const WeeklyStack = createStackNavigator();

export const WeeklyNavigator = () => {
  return (
    <WeeklyStack.Navigator
      headerMode={Platform.OS == "android" ? "screen" : "float"}
      screenOptions={screenOptions}
    >
      <WeeklyStack.Screen name="Weekly Weather" component={WeeklyScreen} />
    </WeeklyStack.Navigator>
  );
};

const AlertStack = createStackNavigator();

export const AlertNavigator = () => {
  //TODO: Add backbutton for alert
  return (
    <AlertStack.Navigator>
      <AlertStack.Screen name="AlertScreen" component={CurrentScreen} />
    </AlertStack.Navigator>
  );
};
