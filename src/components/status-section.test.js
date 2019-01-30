import React from "react";

import { shallow, mount } from "enzyme";

import StatusSection from "./status-section";

describe("Renders Status Section", () => {
  it("shallow renders Status Section", () => {
    const myGuesses = [2];
    shallow(<StatusSection guesses={myGuesses} />);
  });
});
