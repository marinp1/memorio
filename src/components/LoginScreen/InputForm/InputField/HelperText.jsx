import React from 'react';
import PropTypes from 'prop-types';

export default class HelperText extends React.Component {
  render() {
    const helpClasses = 'help ';

    return (
      <p className={`${helpClasses} ${this.props.statusClasses}`}>
        {this.props.message}
      </p>
    );
  }
}

HelperText.propTypes = {
  statusClasses: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
