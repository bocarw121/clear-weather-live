import React from "react";

import { render } from "@testing-library/react-native";

import Loading from "../Loading";

it("Should render the Loading", () => {
  const screen = render(<Loading />);

  expect(screen).toMatchSnapshot();
});
