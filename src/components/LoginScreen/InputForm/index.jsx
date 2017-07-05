import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default class InputForm extends React.Component {

  render() {
    if (this.props.currentRoute === '/register') {
      return <RegistrationForm />;
    }
    return <LoginForm />;
  }

}

InputForm.propTypes = {
  currentRoute: PropTypes.string.isRequired,
};
