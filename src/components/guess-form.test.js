import React from "react";

import { shallow, mount } from "enzyme";

import GuessForm from "./guess-form";

describe("Renders Guess Form ok", () => {
  it("renders Guess Form shallowly", () => {
    shallow(<GuessForm />);
  });
});
