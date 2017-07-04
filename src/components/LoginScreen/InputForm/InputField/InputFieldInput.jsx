import React from 'react';
import PropTypes from 'prop-types';

export default class InputFieldInput extends React.Component {
  render() {
    let mainClasses = 'control has-icons-left';
    const inputClasses = 'input';

    if (this.props.status !== 'none') {
      mainClasses += ' has-icons-right';
    }

    const iconClassName = `fa ${this.props.icon}`;

    return (
      <p className={mainClasses}>
        <input
          onChange={this.props.handleEvent}
          className={`${inputClasses} ${this.props.statusClasses}`}
          type={this.props.type}
        />
        <span className="icon is-small is-left">
          <i className={iconClassName} />
        </span>
      </p>
    );
  }
}

InputFieldInput.propTypes = {
  status: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  statusClasses: PropTypes.string.isRequired,
};
