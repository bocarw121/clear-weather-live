import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import colors from "../constants/colors";

const Loading = ({ size }) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator color={colors.white} size={size} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.linearGradient[0],
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
