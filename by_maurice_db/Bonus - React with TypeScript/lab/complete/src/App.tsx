import React from "react";

import ChuckNorris from "./components/chuck-norris";
import JonSkeet from "./components/jon-skeet";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes</h1>
      </header>

      <ChuckNorris />
      <JonSkeet />
    </div>
  );
}

export default App;
