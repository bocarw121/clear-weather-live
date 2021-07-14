import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../constants/colors";

import { dimension } from "../constants/dimension";

const InfoItemCard = ({ children }) => {
  const { infoContainer } = dimension();
  return <View style={[styles.container, infoContainer]}>{children}</View>;
};

export default InfoItemCard;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
    backgroundColor: colors.linearGradient[0],
    borderWidth: 2,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    margin: 10,
  },
});
