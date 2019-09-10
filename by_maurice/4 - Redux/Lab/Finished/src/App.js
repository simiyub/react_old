import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";

import MovieList from "./MovieList";
import MovieEdit from "./MovieEdit";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <h1>Redux</h1>
            <Switch>
              <Route path="/movies" component={MovieList} />
              <Route path="/movie/:id" component={MovieEdit} />
              <Redirect to="/movies" />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
