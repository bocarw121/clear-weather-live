import React from "react";

import { render } from "@testing-library/react-native";

import InfoItemCard from "../InfoItemCard";

it("Should render the InfoItemCard", () => {
  const screen = render(<InfoItemCard />);

  expect(screen).toMatchSnapshot();
});
