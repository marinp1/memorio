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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e, id) {
    e.preventDefault();
    this.setState({
      [id]: e.target.value,
      isValid: validators.isFormValid(this.state, id, e.target.value),
    });
  }

  render() {
    return (
      <div className="box">
        <h1 className="title is-black">Create a new account</h1>
        <InputField
          title="Username"
          icon="fa-user"
          handleEvent={e => this.handleInputChange(e, 'username')}
          type="text"
          status={validators.checkUsernameFieldStatus(this.state.username)}
        />
        <InputField
          title="Password"
          icon="fa-lock"
          handleEvent={e => this.handleInputChange(e, 'password')}
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
          handleEvent={e => this.handleInputChange(e, 'passwordConfirmation')}
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
