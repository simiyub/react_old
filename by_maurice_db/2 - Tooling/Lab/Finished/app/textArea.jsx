import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prop: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  input = null;

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.input.value !== newProps.value) {
      this.input.value = newProps.value;
    }
  }

  onChange() {
    const { value } = this.input;
    const { onChange, prop } = this.props;

    onChange({
      value,
      prop,
    });
  }

  render() {
    const { children, prop, value } = this.props;
    const id = `${prop}Input`;

    return (
      <div className="form-group">
        <label htmlFor={id}>
          {children}
          <textarea
            id={id}
            className="form-control"
            ref={(el) => {
              this.input = el;
            }}
            defaultValue={value}
            onChange={this.onChange}
            rows="5"
          />
        </label>
      </div>
    );
  }
}

export default TextArea;
