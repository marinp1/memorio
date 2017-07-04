import React from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputField';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isValid: false,
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value,
      isValid: e.target.value !== '' && this.state.password !== '',
    });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
      isValid: this.state.username !== '' && e.target.value !== '',
    });
  }

  render() {
    return (
      <div className="box">
        <h1 className="title is-black">Welcome back!</h1>
        <InputField
          title="Username"
          icon="fa-user"
          handleEvent={this.handleUsernameChange}
          type="text"
          status="none"
        />
        <InputField
          title="Password"
          icon="fa-lock"
          handleEvent={this.handlePasswordChange}
          type="password"
          status="none"
        />
        <div className="field">
          <p className="control">
            <button disabled={!this.state.isValid} className="button is-info login-button">
              Login
            </button>
          </p>
        </div>
        <Link to="/register" className="is-grey register-link">
          Don{"''"}t have an account? Register here.
        </Link>
      </div>
    );
  }
}
