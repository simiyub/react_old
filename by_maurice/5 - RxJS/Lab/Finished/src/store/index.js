import { Subject } from 'rxjs';

import { scan, shareReplay } from 'rxjs/operators';

const action$ = new Subject();
const initialState = { movies: [], currentMovie: null };

export const store$ = action$.pipe(
  scan((state, action) => {
    switch (action.type) {
      case 'MOVIES-LOADED':
        return { ...state, movies: action.movies };

      case 'MOVIE-LOADED':
        return { ...state, currentMovie: action.movie };

      case 'MOVIE-PROP-CHANGED':
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
  }, initialState),
  shareReplay(1)
);

export const dispatch = action => action$.next(action);
