import React, { Component } from "react";
import PropTypes from "prop-types";

class InputText extends Component {
  static defaultProps = {
    value: "",
    errors: []
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prop: PropTypes.string.isRequired,
    value: PropTypes.any,
    errors: PropTypes.array
  };

  onChange = e => {
    const value = e.target.value;
    this.props.onChange({ value: value, prop: this.props.prop });
  };

  render() {
    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <input
          id={this.props.prop + "Input"}
          type="text"
          className="form-control"
          value={this.props.value}
          onChange={this.onChange}
        />
        <ul className="list-group">
          {this.props.errors.map(error => (
            <li key={error} className="list-group-item list-group-item-warning">
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InputText;
