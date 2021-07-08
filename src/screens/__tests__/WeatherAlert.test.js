import React from "react";

import { render } from "@testing-library/react-native";

import WeatherAlert from "../WeatherAlert";

it("should render the current screen", () => {
  const screen = render(<WeatherAlert />);

  expect(screen).toMatchSnapshot();
});
