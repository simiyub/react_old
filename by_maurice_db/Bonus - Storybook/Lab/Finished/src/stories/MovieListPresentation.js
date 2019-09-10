import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
// import { checkA11y } from 'storybook-addon-a11y';
import { checkA11y } from '@storybook/addon-a11y';

import MovieListPresentation from '../components/list/MovieListPresentation';

storiesOf('MovieListPresentation', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .addDecorator(checkA11y)
  .add('With an empty list', () => <MovieListPresentation movies={[]} />)
  .add('With some movies', () => (
    <MovieListPresentation
      movies={[
        { id: 771028554, title: '127 Hours' },
        { id: 9917, title: '2001: A Space Odyssey' },
        { id: 12865, title: 'Kill Bill: Volume 11111' }
      ]}
    />
  ))
  .add('When loading', () => <MovieListPresentation loading />)
  .add('With an unauthorized error', () => (
    <MovieListPresentation error={{ statusText: 'Unauthorized' }} />
  ))
  .add('With an error message', () => (
    <MovieListPresentation error={{ message: 'En error message' }} />
  ));
