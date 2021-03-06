import React, { Component } from "react";

import Jokes from "./jokes";

class ChuckNorris extends Component {
  state = { jokes: [] };

  async componentDidMount() {
    const rsp = await fetch("/api/chuck-norris.json");
    const jokes = await rsp.json();
    this.setState({ jokes });
  }

  render() {
    const { jokes } = this.state;

    return (
      <div>
        <h2>Chuck Norris</h2>
        <Jokes jokes={jokes} />
      </div>
    );
  }
}

export default ChuckNorris;
