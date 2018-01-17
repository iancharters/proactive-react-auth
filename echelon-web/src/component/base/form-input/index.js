import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const {
      input,
      type,
      placeholder,
      meta,
    } = this.props;

    return (
      <div className="input">
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          className="form-control"
        />
        {meta.touched && meta.error &&
          <div className="validation-error">{meta.error}</div>
        }
      </div>
    );
  }
}

Input.defaultProps = {
  label: '',
  type: '',
  placeholder: '',
};
