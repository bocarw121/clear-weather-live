import React from "react";

import { render } from "@testing-library/react-native";

import WeatherIcon from "../WeatherIcon";

it("Should render the WeatherIcon", () => {
  const screen = render(<WeatherIcon />);

  expect(screen).toMatchSnapshot();
});
