import React from "react";
import PropTypes from "prop-types";

class InputText extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    prop: PropTypes.string.isRequired,
    value: PropTypes.any
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if (this.refs.input.value !== newProps.value) {
      this.refs.input.value = newProps.value;
    }
  }
  onChange() {
    const value = this.refs.input.value;
    this.props.onChange({
      value,
      prop: this.props.prop
    });
  }
  render() {
    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <input
          id={`${this.props.prop}Input`}
          type="text"
          className="form-control"
          ref="input"
          defaultValue={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default InputText;
