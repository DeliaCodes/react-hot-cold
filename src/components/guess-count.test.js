import React from "react";

import { shallow, mount } from "enzyme";

import GuessCount from "./guess-count";

describe("Render Guess Count", () => {
  it("renders Guess Count", () => {
    shallow(<GuessCount />);
  });
});
