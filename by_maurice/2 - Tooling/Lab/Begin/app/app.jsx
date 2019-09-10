import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "./movieList.jsx";
import MovieEdit from "./movieEdit.jsx";

import actions from "./actions";

actions.loadMovies();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>ReactJS</h1>

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

ReactDOM.render(<App />, document.getElementById("app"));
