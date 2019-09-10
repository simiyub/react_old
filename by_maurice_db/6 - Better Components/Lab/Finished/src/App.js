import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

import MovieListState from "./MovieListState";
import MovieEditorState from "./MovieEditorState";

class App extends Component {
  state = {
    editMode: false,
    id: undefined
  };

  toEditMode = e => {
    console.log("toEditMode", e.id);
    this.setState({
      editMode: true,
      id: e.id
    });
  };
  
  toListMode = () => {
    console.log("toListMode");
    this.setState({
      editMode: false,
      id: undefined
    });
  };

  render() {
    var component;

    if (this.state.editMode) {
      component = (
        <MovieEditorState toListMode={this.toListMode} movieId={this.state.id} />
      );
    } else {
      component = <MovieListState toEditMode={this.toEditMode} />;
    }

    return (
      <div className="container">
        <h1>Better Components</h1>
        {component}
      </div>
    );
  }
}

export default App;
