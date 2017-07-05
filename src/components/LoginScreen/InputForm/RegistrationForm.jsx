import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import InputField from './InputField';

class RegistrationForm extends React.Component {

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
        <h1 className="title is-black">Create a new account</h1>
        <InputField
          title="Username"
          icon="fa-user"
          handleEvent={e => this.handleInputChange('USERNAME', e.target.value)}
          type="text"
          value={this.props.form.username.text}
          status={this.props.form.username.status}
        />
        <InputField
          title="Password"
          icon="fa-lock"
          handleEvent={e => this.handleInputChange('PASSWORD', e.target.value)}
          type="password"
          value={this.props.form.password.text}
          status={this.props.form.password.status}
        />
        <InputField
          title="Confirm password"
          icon="fa-lock"
          handleEvent={e => this.handleInputChange('PASSWORD_CONFIRMATION', e.target.value)}
          type="password"
          value={this.props.form.passwordConfirmation.text}
          status={this.props.form.passwordConfirmation.status}
        />
        <div className="field">
          <p className="control">
            <button
              disabled={!this.props.form.valid}
              className="button is-info login-button"
              onClick={this.handleSubmit}
            >
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

RegistrationForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  form: state.RegistrationScreen,
});

const mapDispatchToProps = dispatch => ({
  handleInputChange: (id, text) => {
    const type = `REGISTRATION_UPDATE_${id}`;
    dispatch({
      type,
      text,
    });
  },
  handleSubmit: () => {
    dispatch({
      type: 'REGISTRATION_CLEAR',
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationForm);
