import React from "react";

import { shallow, mount } from "enzyme";

import GuessList from "./guess-list";

describe("Renders Guess List", () => {
  it("renders Guess List shallowly", () => {
    const myGuesses = [2, 3];
    shallow(<GuessList guesses={myGuesses} />);
  });
});
