import { EventEmitter } from "events";
import assign from "object-assign";
import Dispatcher from "./dispatcher";
import constants from "./constants";

const CHANGE_EVENT = "change";
let movies = [];

function findMovieById(id) {
  return movies.filter(m => m.id === id).pop();
}

const MovieStore = assign({}, EventEmitter.prototype, {
  getAll() {
    return movies;
  },
  getById(id) {
    const movie = findMovieById(id);
    return assign({}, movie);
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(action => {
  switch (action.type) {
    case constants.moviesLoaded:
      movies = action.movies;
      MovieStore.emitChange();
      break;
    case constants.movieSaved:
      const movie = findMovieById(action.movie.id);
      assign(movie, action.movie);
      MovieStore.emitChange();
      break;
    default:
      break;
  }
});

export default MovieStore;
