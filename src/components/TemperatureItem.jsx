import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const round = (temp) => Math.round(temp);

const TemperatureItem = ({ temp, feelsLike }) => {
  return (
    <View>
      {temp && <Text style={styles.temp}>{round(temp)}°C</Text>}
      {feelsLike && (
        <Text style={styles.feels}>Feels like {round(feelsLike)}°C</Text>
      )}
    </View>
  );
};

export default TemperatureItem;

const styles = StyleSheet.create({
  temp: {
    fontSize: 64,
    color: colors.text.yellow,
    marginTop: 10,
  },
  feels: {
    color: colors.text.light,
    fontSize: 18,
    marginTop: 10,
  },
});
