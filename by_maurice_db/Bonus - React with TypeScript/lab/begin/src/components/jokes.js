import React from "react";

const Jokes = ({ jokes }) => (
  <ul>
    {jokes.map(j => (
      <li key={j.id}>{j.joke}</li>
    ))}
  </ul>
);

export default Jokes;
