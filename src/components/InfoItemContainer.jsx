import React from "react";
import { StyleSheet, View } from "react-native";

const InfoItemContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default InfoItemContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 50,
    marginBottom: 50,
  },
});
