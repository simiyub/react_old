import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import MovieList from "./components/list/MovieList";
import MovieEdit from "./components/edit/MovieEdit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Storybook</h1>
          <Switch>
            <Route path="/movies" component={MovieList} />
            <Route path="/movie/:id" component={MovieEdit} />
            <Redirect to="/movies" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
