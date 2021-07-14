import React from "react";

import { render } from "@testing-library/react-native";

import City from "../City";

it("Should render the City", () => {
  const screen = render(<City />);

  expect(screen).toMatchSnapshot();
});
