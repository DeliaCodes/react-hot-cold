import React from "react";

import { shallow, mount } from "enzyme";

import InfoSection from "./info-section";

describe("Renders Info Section", () => {
  it("shallow renders the info section", () => {
    shallow(<InfoSection />);
  });
});
