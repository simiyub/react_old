const currentMovie = function(state = null, action) {
  switch (action.type) {
    case "MOVIE-LOADED":
      return action.movie;

    case "MOVIE-PROP-CHANGED":
      return {
        ...state,
        [action.prop]: action.value
      };

    default:
      return state;
  }
};

export default currentMovie;
