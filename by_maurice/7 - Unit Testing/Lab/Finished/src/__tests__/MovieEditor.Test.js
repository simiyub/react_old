import React from 'react';
import { mount } from 'enzyme';

import MovieEditor from '../MovieEditor';

describe('The MovieEditor', () => {
  it('renders an HTML form element', () => {
    const component = mount(
      <MovieEditor
        movie={{}}
        onChange={e => (arg = e)}
        save={() => {}}
        toListMode={() => {}}
      />
    );

    const inputs = component.find('form');

    expect(inputs.length).toBe(1);
  });

  it('should call onChange when the movie title is changed', () => {
    const fn = jest.fn();

    const movie = {
      id: '1',
      title: 'Kill Bill',
      abridgedDirectors: ['Quentin Tarantino'],
      criticsConsensus: 'Good',
      synopsis: 'A revenge movie',
      year: 2003
    };

    const component = mount(
      <MovieEditor
        movie={movie}
        onChange={fn}
        save={() => {}}
        toListMode={() => {}}
      />
    );

    component
      .find('input[value="Kill Bill"]')
      .simulate('change', { target: { value: 'Star wars' } });

    expect(fn).toHaveBeenCalledWith({
      prop: 'title',
      value: 'Star wars'
    });
  });

  it('should go to the list view when the cancel button is clicked', () => {
    const fn = jest.fn();

    const movie = {
      id: '1',
      title: 'Kill Bill',
      abridgedDirectors: ['Quentin Tarantino'],
      criticsConsensus: 'Good',
      synopsis: 'A revenge movie',
      year: 2003
    };

    const component = mount(
      <MovieEditor
        movie={movie}
        onChange={() => {}}
        save={() => {}}
        toListMode={fn}
      />
    );

    component.find('.btn-danger').simulate('click');

    expect(fn).toHaveBeenCalled();
  });

  it('should save the movie when the save button is clicked', () => {
    const fn = jest.fn();

    const movie = {
      id: '1',
      title: 'Kill Bill',
      abridgedDirectors: ['Quentin Tarantino'],
      criticsConsensus: 'Good',
      synopsis: 'A revenge movie',
      year: 2003
    };

    const component = mount(
      <MovieEditor
        movie={movie}
        onChange={() => {}}
        save={fn}
        toListMode={() => {}}
      />
    );

    component.find('.btn-primary').simulate('click');

    expect(fn).toHaveBeenCalled();
  });
});
