import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prop: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.string),
    ]),
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
          <input
            id={id}
            type="text"
            className="form-control"
            ref={(el) => {
              this.input = el;
            }}
            defaultValue={value}
            onChange={this.onChange}
          />
        </label>
      </div>
    );
  }
}

export default InputText;
