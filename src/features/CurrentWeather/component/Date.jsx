import React from "react";
import { StyleSheet, Text } from "react-native";

const Date = ({ time }) => {
  return <Text style={styles.text}>Updated: {time}</Text>;
};

export default Date;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
  },
});
