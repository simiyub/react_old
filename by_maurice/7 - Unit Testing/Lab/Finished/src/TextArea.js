import React, { Component } from "react";
import PropTypes from "prop-types";

class TextArea extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
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
        <textarea
          id={this.props.prop + "Input"}
          className="form-control"
          value={value}
          onChange={this.onChange}
          rows="5"
        />
      </div>
    );
  }
}

export default TextArea;
