import React, { Component, cloneElement } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';

import InputText from '../components/edit/InputText';

class StateDecorator extends Component {
  state = {
    value: 'Hello'
  };

  onChange = e => this.setState({ [e.prop]: e.value });

  render() {
    const props = { prop: 'value', onChange: this.onChange, ...this.state };
    return cloneElement(this.props.children, props);
  }
}

storiesOf('InputText', module)
  .add('with an empty input', () => (
    <InputText value="" prop="" onChange={action('onChange')}>
      {' '}
    </InputText>
  ))
  .add('with some data', () => (
    <InputText value="The value" prop="" onChange={action('onChange')}>
      Title:
    </InputText>
  ))
  .addDecorator(story => <StateDecorator>{story()}</StateDecorator>)
  .addDecorator(checkA11y)
  .add('with state', () => (
    <InputText value="" prop="" onChange={action('onChange')}>
      Label:
    </InputText>
  ))
  .add('with state and error', () => (
    <InputText
      value=""
      prop=""
      onChange={action('onChange')}
      errors={['An error', 'A second error']}
    >
      Label:
    </InputText>
  ));
