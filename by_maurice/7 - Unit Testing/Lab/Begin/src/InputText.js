import React, { Component } from "react";
import PropTypes from "prop-types";

class InputText extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    prop: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: ""
  };

  onChange = e => {
    const { value } = e.target;
    this.props.onChange({ value: value, prop: this.props.prop });
  };

  render() {
    const { value, children } = this.props;

    return (
      <div className="form-group">
        <label>{children}</label>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default InputText;
