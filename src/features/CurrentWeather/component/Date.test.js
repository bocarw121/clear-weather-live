import React from "react";

import { render } from "@testing-library/react-native";

import Date from "./Date";

it("Should render the Date", () => {
  const screen = render(<Date />);

  expect(screen).toMatchSnapshot();
});
