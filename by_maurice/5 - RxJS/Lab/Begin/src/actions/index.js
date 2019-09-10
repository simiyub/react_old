export const moviesLoaded = movies => {
  return {
    type: "MOVIES-LOADED",
    movies
  };
};

export const movieLoaded = movie => {
  return {
    type: "MOVIE-LOADED",
    movie
  };
};

export const currentMoviePropChanged = (prop, value) => {
  return {
    type: "MOVIE-PROP-CHANGED",
    prop,
    value
  };
};
