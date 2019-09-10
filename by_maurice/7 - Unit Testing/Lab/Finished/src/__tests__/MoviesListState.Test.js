import React from "react";
import { mount } from "enzyme";

import MoviesListState from "../MovieListState";

describe("The MoviesListState", () => {
  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => [
          { id: 1, title: "Kill Bill" },
          { id: 2, title: "Star wars" }
        ]
      })
    );
  });

  it("should load movies", done => {
    const component = mount(<MoviesListState toEditMode={() => {}} />);

    setTimeout(function() {
      expect(component.state().movies.length).toBe(2);

      done();
    }, 0);
  });
});
