import React, { Component } from 'react';

class TextArea extends Component {
    input = null;
    componentWillReceiveProps(newProps) {
      if (this.input.value !== newProps.value) {
        this.input.value = newProps.value;
      }
    }
    onChange = () => {
      var value = this.input.value;
      this.props.onChange({ value: value, prop: this.props.prop });
    };
    render() {
      return (
        <div className="form-group">
          <label>{this.props.children}</label>
          <textarea
            id={this.props.prop + "Input"}
            className="form-control"
            ref={e => (this.input = e)}
            onChange={this.onChange}
            rows="5"
          />
        </div>
      );
    }
  }
  
export default TextArea;