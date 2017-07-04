import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'registration',
      currentRoute: '/register',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRoute !== this.state.currentRoute) {
      this.toggleActiveForm();
      this.setState({
        currentRoute: nextProps.currentRoute,
      });
    }
  }

  toggleActiveForm() {
    if (this.state.activeForm === 'registration') {
      this.setState({ activeForm: 'login' });
    } else {
      this.setState({ activeForm: 'registration' });
    }
  }

  render() {
    if (this.state.activeForm === 'registration') {
      return <RegistrationForm />;
    }
    return <LoginForm />;
  }

}

InputForm.propTypes = {
  currentRoute: PropTypes.string.isRequired,
};
