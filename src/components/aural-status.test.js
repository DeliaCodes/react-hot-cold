import React from "react";

import { shallow, mount } from "enzyme";

import AuralStatus from "./aural-status";

describe("Renders Aural Status ok", () => {
  it("shallow renders Aural Status", () => {
    shallow(<AuralStatus />);
  });
});
