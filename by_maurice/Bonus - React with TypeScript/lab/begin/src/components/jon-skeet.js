import React, { useEffect, useState } from "react";

import Jokes from "./jokes";

const JonSkeet = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const rsp = await fetch("/api/jon-skeet.json");
      const jokes = await rsp.json();
      setJokes(jokes);
    };

    fetchJokes();
  }, []);

  return (
    <div>
      <h2>Jon Skeet</h2>
      <Jokes jokes={jokes} />
    </div>
  );
};

export default JonSkeet;
