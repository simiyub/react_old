import React, { Component } from "react";

class InputText extends Component {
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
