import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import InformationBox from './InformationBox';
import InputForm from './InputForm';

require('./style.scss');

class LoginRegistrationScreen extends React.Component {

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
                <InputForm currentRoute={this.props.currentRoute} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginRegistrationScreen.propTypes = {
  currentRoute: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentRoute: state.CurrentRoute,
});

export default connect(
  mapStateToProps,
)(LoginRegistrationScreen);
