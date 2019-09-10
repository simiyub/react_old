import React, { Component } from "react";
import PropTypes from "prop-types";

class TextArea extends Component {
  static defaultProps = {
    value: ""
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prop: PropTypes.string.isRequired,
    value: PropTypes.string
  };

  onChange = e => {
    const value = e.target.value;
    this.props.onChange({ value: value, prop: this.props.prop });
  };
  render() {
    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <textarea
          id={this.props.prop + "Input"}
          className="form-control"
          value={this.props.value}
          onChange={this.onChange}
          rows="5"
        />
      </div>
    );
  }
}

export default TextArea;
