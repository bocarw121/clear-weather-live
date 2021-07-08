import React from "react";

import { render } from "@testing-library/react-native";

import CurrentScreen from "../CurrentScreen";

it("should render the current screen", () => {
  const screen = render(<CurrentScreen />);

  expect(screen).toMatchSnapshot();
});
