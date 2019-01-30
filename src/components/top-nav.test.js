import React from "react";

import { shallow, mount } from "enzyme";

import TopNav from "./top-nav";

describe("Renders Top Nav", () => {
  it("shallow renders", () => {
    shallow(<TopNav />);
  });
});
