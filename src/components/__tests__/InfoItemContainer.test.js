import React from "react";

import { render } from "@testing-library/react-native";

import InfoItemContainer from "../InfoItemContainer";

it("Should render the InfoItemContainer", () => {
  const screen = render(<InfoItemContainer />);

  expect(screen).toMatchSnapshot();
});
