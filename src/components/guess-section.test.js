import React from "react";

import { shallow, mount } from "enzyme";

import GuessSection from "./guess-section";

describe("Renders Guess Section", () => {
  it("Shallow renders Guess Section", () => {
    shallow(<GuessSection />);
  });
});
