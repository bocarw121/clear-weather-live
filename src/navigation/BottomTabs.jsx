import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBarIcons from "./components/TabBarIcons";
import colors from "../constants/colors";
import { CurrentNavigator, HourlyNavigator, WeeklyNavigator } from "./Stack";

const bottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <bottomTab.Navigator
      initialRouteName="Current"
      tabBarOptions={{
        activeTintColor: colors.white,
        style: {
          backgroundColor: colors.primary,
          borderTopColor: colors.border,
          borderTopWidth: 2,
          paddingBottom: 5,
        },
        inactiveTintColor: colors.black,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Current: "weather-cloudy",
            Weekly: "weather-cloudy",
            Hourly: "weather-cloudy",
          };
          return (
            <TabBarIcons name={icons[route.name]} color={color} size={size} />
          );
        },
      })}
    >
      <bottomTab.Screen
        name="Current"
        component={CurrentNavigator}
      ></bottomTab.Screen>
      <bottomTab.Screen
        name="Hourly"
        component={HourlyNavigator}
      ></bottomTab.Screen>
      <bottomTab.Screen
        name="Weekly"
        component={WeeklyNavigator}
      ></bottomTab.Screen>
    </bottomTab.Navigator>
  );
};

export default BottomTabNavigator;
