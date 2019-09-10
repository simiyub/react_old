import React from "react";
import renderer from "react-test-renderer";

import MoviesList from "../MovieList";
import MovieEditor from "../MovieEditor";
import InputText from "../InputText";
import TextArea from "../TextArea";

describe("All components should render correctly", () => {
  it("empty MoviesList", () => {
    const tree = renderer
      .create(<MoviesList movies={[]} toEditMode={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("non empty MoviesList", () => {
    const tree = renderer
      .create(
        <MoviesList
          movies={[
            {
              id: "1",
              title: "Kill Bill",
              abridgedDirectors: ["Quentin Tarantino"]
            }
          ]}
          toEditMode={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("empty MovieEditor", () => {
    const tree = renderer
      .create(
        <MovieEditor
          movie={{
            id: "",
            title: "",
            abridgedDirectors: [],
            criticsConsensus: "",
            synopsis: "",
            year: 0
          }}
          save={() => {}}
          toListMode={() => {}}
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("non empty MovieEditor", () => {
    const tree = renderer
      .create(
        <MovieEditor
          movie={{
            id: "1",
            title: "Kill Bill",
            abridgedDirectors: ["Quentin Tarantino"],
            criticsConsensus: "Good",
            synopsis: "A revenge movie",
            year: 2003
          }}
          save={() => {}}
          toListMode={() => {}}
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("InputText", () => {
    const tree = renderer
      .create(
        <InputText value={"Kill Bill"} prop="title" onChange={() => {}}>
          Title
        </InputText>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("TextArea", () => {
    const tree = renderer
      .create(
        <TextArea
          value={"movie.criticsConsensus"}
          prop="criticsConsensus"
          onChange={() => {}}
        >
          Critics Consensus
        </TextArea>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
