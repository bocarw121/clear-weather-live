import React from "react";

import { render } from "@testing-library/react-native";

import InfoItem from "../InfoItem";

it("Should render the InfoItem", () => {
  const screen = render(<InfoItem />);

  expect(screen).toMatchSnapshot();
});
