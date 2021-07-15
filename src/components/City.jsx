import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../constants/colors";

const City = ({ city }) => {
  return <Text style={styles.location}>{city}</Text>;
};

export default City;

const styles = StyleSheet.create({
  location: {
    color: colors.white,
    fontSize: 34,
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
  },
});
