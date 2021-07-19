import { useWindowDimensions } from "react-native";

export const dimension = () => {
  const { height, width } = useWindowDimensions();
  return {
    infoContainer: {
      height: height / 8,
      width: width / 2.4,
    },
  };
};
