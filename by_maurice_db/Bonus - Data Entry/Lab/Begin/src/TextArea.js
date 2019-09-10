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

  render() {
    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <textarea
          id={this.props.prop + "Input"}
          className="form-control"
          rows="5"
        />
      </div>
    );
  }
}

export default TextArea;
