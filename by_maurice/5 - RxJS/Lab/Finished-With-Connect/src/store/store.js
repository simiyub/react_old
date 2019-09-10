import { Subject } from 'rxjs';
import { scan, shareReplay } from 'rxjs/operators';

import { reducer } from './reducer';

export const initialState = {
  movies: [],
  currentMovie: null
};

const action$ = new Subject();
export const store$ = action$.pipe(
  scan(reducer, initialState),
  shareReplay(1)
);

export const dispatch = action => action$.next(action);
