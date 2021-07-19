import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, ScrollView } from "react-native";

import colors from "../constants/colors";

const LinearGradientView = ({ children }) => {
  return (
    <View>
      <LinearGradient
        colors={colors.linearGradient}
        style={[styles.linearGradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView>{children}</ScrollView>
      </LinearGradient>
    </View>
  );
};

export default LinearGradientView;

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
  },
});
