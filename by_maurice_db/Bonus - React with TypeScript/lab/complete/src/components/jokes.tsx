import React from "react";
import { Joke } from "./types";

type JokesProps = {
  jokes: Joke[];
};

const Jokes = ({ jokes }: JokesProps) => (
  <ul>
    {jokes.map(j => (
      <li key={j.id}>{j.joke}</li>
    ))}
  </ul>
);

export default Jokes;
