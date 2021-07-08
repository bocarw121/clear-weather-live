import React from "react";

import { render } from "@testing-library/react-native";

import LinearGradientView from "../LinearGradientView";

it("should render the current screen", () => {
  const screen = render(<LinearGradientView />);

  expect(screen).toMatchSnapshot();
});
