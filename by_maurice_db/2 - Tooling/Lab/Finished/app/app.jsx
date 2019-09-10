import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import MovieList from './movieList';
import MovieEdit from './movieEdit';

import actions from './actions';

actions.loadMovies();

const App = () => (
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

ReactDOM.render(<App />, document.getElementById('app'));
