import React from "react";

import { shallow, mount } from "enzyme";

import Header from "./header";

describe("Renders Header", () => {
  it("shallow renders header", () => {
    shallow(<Header />);
  });
});
