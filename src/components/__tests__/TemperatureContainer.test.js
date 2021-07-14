import React from "react";

import { render } from "@testing-library/react-native";

import TemperatureContainer from "../TemperatureContainer";

it("Should render the TemperatureContainer", () => {
  const screen = render(<TemperatureContainer />);

  expect(screen).toMatchSnapshot();
});
