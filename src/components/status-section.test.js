import React from "react";

import { shallow, mount } from "enzyme";

import StatusSection from "./status-section";

describe("Renders Status Section", () => {
  it("shallow renders Status Section", () => {
    const myGuesses = [2];
    shallow(<StatusSection guesses={myGuesses} />);
  });
  it("renders correct number of guesses", () => {
    const moreMyGuesses = [9, 6, 50];
    const wrapper = shallow(<StatusSection guesses={moreMyGuesses} />);
    // console.log("wrapper", wrapper.html());
    // specificity in expect and the assertion
    expect(wrapper.html()).toContain('<span id="count">3</span>');
  });
});
