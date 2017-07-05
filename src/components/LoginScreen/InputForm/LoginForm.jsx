import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import InputField from './InputField';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(id, value) {
    this.props.handleInputChange(id, value);
  }

  handleSubmit() {
    this.props.handleSubmit(this.props.form);
  }

  render() {
    return (
      <div className="box">
        <h1 className="title is-black">Welcome back!</h1>
        <InputField
          title="Username"
          icon="fa-user"
          handleEvent={e => this.handleInputChange('USERNAME', e.target.value)}
          type="text"
          value={this.props.form.username.text}
          status="none"
        />
        <InputField
          title="Password"
          icon="fa-lock"
          handleEvent={e => this.handleInputChange('PASSWORD', e.target.value)}
          type="password"
          value={this.props.form.password.text}
          status="none"
        />
        <div className="field">
          <p className="control">
            <button
              disabled={!this.props.form.valid}
              className="button is-info login-button"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </p>
        </div>
        <Link to="/register" className="is-grey register-link">
          Don{"'"}t have an account? Register here.
        </Link>
      </div>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  form: state.LoginScreen,
});

const mapDispatchToProps = dispatch => ({
  handleInputChange: (id, text) => {
    const type = `LOGIN_UPDATE_${id}`;
    dispatch({
      type,
      text,
    });
  },
  handleSubmit: () => {
    dispatch({
      type: 'LOGIN_CLEAR',
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
