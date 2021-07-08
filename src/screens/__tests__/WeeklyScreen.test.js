import React from "react";

import { render } from "@testing-library/react-native";

import WeeklyScreen from "../WeeklyScreen";

it("should render the current screen", () => {
  const screen = render(<WeeklyScreen />);

  expect(screen).toMatchSnapshot();
});
