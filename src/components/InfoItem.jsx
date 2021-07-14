import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../constants/colors";

const InfoItem = ({ description, measure, unit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.unit}>{`${measure} ${unit || ""}`}</Text>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  description: {
    color: colors.text.light,
    fontSize: 20,
    paddingTop: 10,
  },
  unit: {
    color: colors.text.yellow,
    fontSize: 18,
    paddingTop: 10,
  },
});
