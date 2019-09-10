const movies = function(state = [], action) {
  switch (action.type) {
    case "MOVIES-LOADED":
      return action.movies;
    
      case "CLEAR-MOVIES":
      return [];

    default:
      return state;
  }
};

export default movies;
