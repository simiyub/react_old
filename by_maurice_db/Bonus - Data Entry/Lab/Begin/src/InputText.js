import React, { Component } from "react";
import PropTypes from "prop-types";

class InputText extends Component {
  static defaultProps = {
    value: ""
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prop: PropTypes.string.isRequired,
    value: PropTypes.any
  };

  render() {
    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <input
          id={this.props.prop + "Input"}
          type="text"
          className="form-control"
        />
      </div>
    );
  }
}

export default InputText;
