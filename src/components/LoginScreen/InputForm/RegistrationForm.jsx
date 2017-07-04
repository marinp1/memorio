import React from 'react';
import { Link } from 'react-router-dom';
import * as validators from './validators';
import InputField from './InputField';

export default class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      isValid: false,
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
    const newValidity =
            validators.validateRegistrationform(
                e.target.value,
                this.state.password,
                this.state.passwordConfirmation,
            );
    this.setState({ isValid: newValidity });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
    const newValidity =
            validators.validateRegistrationform(
                this.state.username, e.target.value,
                this.state.passwordConfirmation,
            );
    this.setState({ isValid: newValidity });
  }

  handlePasswordConfirmationChange(e) {
    e.preventDefault();
    this.setState({ passwordConfirmation: e.target.value });
    const newValidity =
        validators.validateRegistrationform(
            this.state.username,
            this.state.password,
            e.target.value,
        );
    this.setState({ isValid: newValidity });
  }

  render() {
    return (
      <div className="box">
        <h1 className="title is-black">Create a new account</h1>
        <InputField
          title="Username"
          icon="fa-user"
          handleEvent={this.handleUsernameChange}
          type="text"
          status={validators.checkUsernameFieldStatus(this.state.username)}
        />
        <InputField
          title="Password"
          icon="fa-lock"
          handleEvent={this.handlePasswordChange}
          type="password"
          status={validators.checkPasswordFieldStatus(
                        false,
                        this.state.password,
                        this.state.passwordConfirmation,
                    )}
        />
        <InputField
          title="Confirm password"
          icon="fa-lock"
          handleEvent={this.handlePasswordConfirmationChange}
          type="password"
          status={validators.checkPasswordFieldStatus(
                        true,
                        this.state.password,
                        this.state.passwordConfirmation,
                    )}
        />
        <div className="field">
          <p className="control">
            <button disabled={!this.state.isValid} className="button is-info login-button">
              Register
            </button>
          </p>
        </div>
        <Link to="/login" className="is-grey register-link">
            Already have an account? Login here.
        </Link>
      </div>
    );
  }
}
