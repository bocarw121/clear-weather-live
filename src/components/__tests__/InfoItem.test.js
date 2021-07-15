import React from "react";

import { render } from "@testing-library/react-native";

import InfoItem from "../InfoItem";

it("Should render the InfoItem", () => {
  const item = {
    name: "",
    value: 0,
    level: "low",
    unit: "",
  };
  const screen = render(<InfoItem info={item} />);

  expect(screen).toMatchSnapshot();
});
