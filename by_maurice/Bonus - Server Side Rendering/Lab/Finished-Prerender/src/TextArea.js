import React, { Component } from "react";

class TextArea extends Component {
  static defaultProps = {
    value: ""
  };

  onChange = e => {
    const { value } = e.target;
    this.props.onChange({ value: value, prop: this.props.prop });
  };

  render() {
    const { value } = this.props;

    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <textarea
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
