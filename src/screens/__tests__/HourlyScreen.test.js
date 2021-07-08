import React from "react";

import { render } from "@testing-library/react-native";

import HourlyScreen from "../HourlyScreen";

it("should render the current screen", () => {
  const screen = render(<HourlyScreen />);

  expect(screen).toMatchSnapshot();
});
