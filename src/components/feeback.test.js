import React from "react";

import { shallow, mount } from "enzyme";

import Feedback from "./feedback";

describe("Renders feedback", () => {
  it("renders feedback shallowly", () => {
    shallow(<Feedback />);
  });
});
