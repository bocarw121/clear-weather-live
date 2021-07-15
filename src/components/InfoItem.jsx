import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../constants/colors";

const InfoItem = ({ info }) => {
  const { name, value, level, unit } = info;
  const uviStyle = [styles.uvi];

  uviLevelColor(name, value, uviStyle);
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{name}</Text>
      <Text style={styles.unit}>{`${value} ${unit || ""}`}</Text>
      {name === "UVI" ? <Text style={uviStyle}>{level}</Text> : null}
    </View>
  );
};

export default InfoItem;

const uviLevelColor = (name, value, uviStyle) => {
  name === "UVI" && value >= 0 && value <= 2
    ? uviStyle.push({ color: colors.uviLevels.low })
    : null;
  name === "UVI" && value >= 3 && value <= 5
    ? uviStyle.push({ color: colors.uviLevels.moderate })
    : null;
  name === "UVI" && value >= 6 && value <= 7
    ? uviStyle.push({ color: colors.uviLevels.high })
    : null;
  name === "UVI" && value >= 8 && value <= 10
    ? uviStyle.push({ color: colors.uviLevels.veryHigh })
    : null;
  name === "UVI" && value >= 8 && value <= 10
    ? uviStyle.push({ color: colors.uviLevels.extreme })
    : null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    fontWeight: "bold",
  },
  description: {
    color: colors.text.light,
    fontSize: 20,
    paddingTop: 10,
  },
  unit: {
    color: colors.text.yellow,
    fontSize: 19,
    paddingTop: 10,
  },
  uvi: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
});
