import React from 'react';
import { mount } from 'enzyme';

import InputText from '../InputText';

describe('The InputText', () => {
  it('renders a input', () => {
    const component = mount(<InputText prop="title">Label</InputText>);

    const inputs = component.find('input');

    expect(inputs.length).toBe(1);
  });

  it('should call onChange when changed', () => {
    const fn = jest.fn();

    const component = mount(
      <InputText value={'Kill Bill'} prop="title" onChange={fn}>
        Title
      </InputText>
    );

    component
      .find('.form-control')
      .simulate('change', { target: { value: 'Star wars' } });

    expect(fn).toHaveBeenCalledWith({
      prop: 'title',
      value: 'Star wars'
    });
  });

  it('should update the input when the value changes', () => {
    const component = mount(
      <InputText value={'Kill Bill'} prop="title" onChange={e => (arg = e)}>
        Title
      </InputText>
    );

    component.setProps({ value: 'Star wars' });
    const input = component.find('.form-control').get(0);
    expect(input.props.value).toBe('Star wars');
  });
});
