import React from 'react';
import PropTypes from 'prop-types';
import InformationBox from './InformationBox';
import InputForm from './InputForm';

export default class LoginRegistrationScreen extends React.Component {
  render() {
    return (
      <section className="hero is-bold is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <InformationBox />
              </div>
              <div className="column">
                <InputForm currentRoute={this.props.location.pathname} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginRegistrationScreen.propTypes = {
  location: PropTypes.string.isRequired,
};
