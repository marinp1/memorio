import React from 'react';
import PropTypes from 'prop-types';

import InputFieldInput from './InputFieldInput';
import HelperText from './HelperText';

export default class InputField extends React.Component {
  static getErrorMessage(title) {
    if (title === 'Username') {
      return 'Username must be at least 4 characters long.';
    } else if (title === 'Password') {
      return 'Password must be at least 6 characters long.';
    } else if (title === 'Confirm password') {
      return 'Password do not match.';
    }
    return 'Unknown error.';
  }

  render() {
    let statusClasses = '';

    if (this.props.status === 'warning') {
      statusClasses += ' is-danger';
    } else if (this.props.status === 'success') {
      statusClasses += ' is-success';
    }

    if (this.props.status !== 'warning') {
      return (
        <div className="field">
          <label className="label">{this.props.title}</label>
          <InputFieldInput
            icon={this.props.icon}
            handleEvent={this.props.handleEvent}
            type={this.props.type}
            status={this.props.status}
            statusClasses={statusClasses}
            value={this.props.value}
          />
        </div>
      );
    }
    return (
      <div className="field">
        <label className="label">{this.props.title}</label>
        <InputFieldInput
          icon={this.props.icon}
          handleEvent={this.props.handleEvent}
          type={this.props.type}
          status={this.props.status}
          statusClasses={statusClasses}
          value={this.props.value}
        />
        <HelperText
          status={this.props.status}
          statusClasses={statusClasses}
          message={InputField.getErrorMessage(this.props.title)}
        />
      </div>
    );
  }
}

InputField.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
