import React from "react";

import { shallow, mount } from "enzyme";

import GuessCount from "./guess-count";

describe("Render Guess Count", () => {
  it("renders Guess Count", () => {
    shallow(<GuessCount />);
  });
  it('renders guess count plural', () => {
    const wrapper = shallow(<GuessCount guessCount={3} />);
    expect(wrapper.html()).toContain('guesses');
  });
});
