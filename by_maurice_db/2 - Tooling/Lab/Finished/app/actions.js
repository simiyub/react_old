import $ from 'jquery';
import Dispatcher from './dispatcher';
import constants from './constants';

const actions = {
  loadMovies() {
    $.getJSON('/api/movies').then(movies => Dispatcher.dispatch({
      type: constants.moviesLoaded,
      movies,
    }));
  },
  save(movie) {
    return $.ajax(`/api/movies/${movie.id}`, {
      data: movie,
      type: 'put',
    }).then(() => Dispatcher.dispatch({
      type: constants.movieSaved,
      movie,
    }));
  },
};

export default actions;
