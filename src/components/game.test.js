import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";

import Game from "./game";

describe("Game Test", () => {
  it("Renders Game without crashing", () => {
    shallow(
      <Provider store={store}>
        <Game />
      </Provider>
    );
  });
});
