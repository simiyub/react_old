import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router-dom';

import MovieEditPresentation from '../components/edit/MovieEditPresentation';

const killBill = {
  id: 12865,
  title: 'Kill Bill: Volume 1',
  year: 2003,
  mpaaRating: 'R',
  ratings: {
    criticsScore: 85,
    audienceScore: 80
  },
  criticsConsensus:
    'Kill Bill is nothing more than a highly stylized revenge flick. But what style!',
  synopsis: '',
  genres: ['Mystery & Suspense', 'Action & Adventure'],
  posters: {
    thumbnail: 'http://content6.flixster.com/movie/11/17/41/11174192_mob.jpg',
    profile: 'http://content6.flixster.com/movie/11/17/41/11174192_pro.jpg',
    detailed: 'http://content6.flixster.com/movie/11/17/41/11174192_det.jpg',
    original: 'http://content6.flixster.com/movie/11/17/41/11174192_ori.jpg'
  },
  abridgedCast: [
    {
      id: 162654901,
      name: 'Uma Thurman',
      characters: ['The Bride']
    },
    {
      id: 162654563,
      name: 'Lucy Liu',
      characters: ['O-Ren Ishii']
    },
    {
      id: 162690310,
      name: 'Vivica A. Fox',
      characters: ['Vernita Green']
    },
    {
      id: 162659641,
      name: 'Daryl Hannah',
      characters: ['Elle Driver']
    },
    {
      id: 770721213,
      name: 'Julie Dreyfus',
      characters: ['Sophie Fatale']
    }
  ],
  abridgedDirectors: ['Quentin Tarantino']
};

storiesOf('MovieEditPresentation', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .addDecorator(checkA11y)
  .add('with an empty movie', () => (
    <MovieEditPresentation
      movie={{}}
      movieErrors={{}}
      onChange={action('onChange')}
      onChangeRatings={action('onChangeRatings')}
    />
  ))
  .add('with Kill Bill', () => (
    <MovieEditPresentation
      movie={killBill}
      movieErrors={{}}
      onChange={action('onChange')}
      onChangeRatings={action('onChangeRatings')}
    />
  ))
  .add('with a title error', () => (
    <MovieEditPresentation
      movie={killBill}
      movieErrors={{ title: ['Some error'] }}
      onChange={action('onChange')}
      onChangeRatings={action('onChangeRatings')}
    />
  ))
  .add('When loading', () => <MovieEditPresentation loading />)
  .add('With an unauthorized error', () => (
    <MovieEditPresentation error={{ statusText: 'Unauthorized' }} />
  ))
  .add('With an error message', () => (
    <MovieEditPresentation error={{ message: 'En error message' }} />
  ));
