import React from "react";

import { render } from "@testing-library/react-native";

import WeatherText from "../WeatherText";

it("Should render the WeatherText", () => {
  const screen = render(<WeatherText />);

  expect(screen).toMatchSnapshot();
});
