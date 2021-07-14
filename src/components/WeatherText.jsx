import React from "react";
import { StyleSheet, Text } from "react-native";

const WeatherText = ({ text, fontSize, color }) => {
  return <Text style={[styles.text, { fontSize, color }]}>{text}</Text>;
};

export default WeatherText;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    textAlign: "center",
  },
});
