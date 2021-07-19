import React from "react";

import { render } from "@testing-library/react-native";

import LinearGradientView from "../LinearGradientView";

it("Should render the LinearGradientView", () => {
  const screen = render(<LinearGradientView />);

  expect(screen).toMatchSnapshot();
});
