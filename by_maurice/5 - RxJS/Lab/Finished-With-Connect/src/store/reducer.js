export const reducer = (state, action) => {
  switch (action.type) {
    case "MOVIES-LOADED":
      return { ...state, movies: action.movies };

    case "MOVIE-LOADED":
      return { ...state, currentMovie: action.movie };

    case "MOVIE-PROP-CHANGED":
      return {
        ...state,
        currentMovie: {
          ...state.currentMovie,
          [action.prop]: action.value
        }
      };

    default:
      return state;
  }
};
