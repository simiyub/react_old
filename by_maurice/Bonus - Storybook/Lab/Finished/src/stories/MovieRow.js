import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router-dom';
// import { checkA11y } from 'storybook-addon-a11y';

import MovieRow from '../components/list/MovieRow';

storiesOf('MovieRow', module)
  .addDecorator(story => (
    <MemoryRouter>
      <table className="table table-bordered">
        <tbody>{story()}</tbody>
      </table>
    </MemoryRouter>
  ))
  .addDecorator(checkA11y)
  .add('with an empty movie', () => <MovieRow movie={{}} />)
  .add('with Kill Bill', () => (
    <MovieRow movie={{ id: 12865, title: 'Kill Bill: Volume 1' }} />
  ))  .add('with long title', () => (
    <MovieRow movie={{ id: 1, title: 'Kill Bill: Volume 1 '.repeat(25) }} />
  ));

