import React from "react";

import { render } from "@testing-library/react-native";

import TemperatureItem from "../TemperatureItem";

it("Should render the TemperatureItem", () => {
  const screen = render(<TemperatureItem />);

  expect(screen).toMatchSnapshot();
});
