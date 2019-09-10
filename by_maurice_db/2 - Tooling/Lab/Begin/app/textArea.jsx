import React from "react";
import PropTypes from "prop-types";

class TextArea extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    prop: PropTypes.string.isRequired,
    value: PropTypes.string
  };

  static defaultProps = {
    value: ""
  };

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
    const value = this.input.value;
    this.props.onChange({
      value,
      prop: this.props.prop
    });
  }
  input = null;
  render() {
    const id = `${this.props.prop}Input`;
    return (
      <div className="form-group">
        <label htmlFor={id}>{this.props.children}</label>
        <textarea
          id={id}
          className="form-control"
          ref={el => {
            this.input = el;
          }}
          defaultValue={this.props.value}
          onChange={this.onChange}
          rows="5"
        />
      </div>
    );
  }
}

export default TextArea;
