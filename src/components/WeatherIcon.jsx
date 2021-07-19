import React from "react";
import { StyleSheet } from "react-native";

import { iconUrl } from "../api/urls";
import Loading from "./Loading";
import Image from "react-native-remote-svg";

const WeatherIcon = ({ icon, id }) => {
  if (!icon) return <Loading size="Large" />;

  return (
    <Image
      source={{
        uri: iconUrl(icon, id),
      }}
      style={styles.image}
    />
  );
};

export default WeatherIcon;

const styles = StyleSheet.create({
  image: { width: 150, height: 150, position: "relative", top: 5 },
});
