import React from "react";
import { StyleSheet, View } from "react-native";

const TemperatureContainer = ({ children, type }) => {
  const containerStyle = [styles.container];

  type === "current"
    ? containerStyle.push(styles.current)
    : type === "hourly"
    ? containerStyle.push(styles.hourly)
    : type === "weekly"
    ? containerStyle.push(styles.weekly)
    : null;

  return <View style={containerStyle}>{children}</View>;
};

export default TemperatureContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  current: {},
  hourly: {},
  weekly: {},
});
