import React from "react";
import { StyleSheet } from "react-native";
import Image from "react-native-remote-svg";

import { filterWeatherIcons } from "../util/icons/filterWeatherIcons";

const WeatherIcon = ({ icon, id }) => {
  const newIcon = filterWeatherIcons(icon, id);
  const defaultIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <Image
      source={{
        uri: newIcon || defaultIcon,
      }}
      style={styles.image}
    />
  );
};

export default WeatherIcon;

const styles = StyleSheet.create({
  image: { width: 150, height: 150, marginBottom: -20, marginTop: -20 },
});
