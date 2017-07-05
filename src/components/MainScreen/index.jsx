import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class MainScreen extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">
          Memorio
        </h1>
        <h2 className="subtitle">
          Welcome {this.props.loggedInUserName}!
        </h2>
      </div>
    );
  }
}

MainScreen.propTypes = {
  loggedInUserName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  loggedInUserName: state.General.currentlyLoggedInUser,
});

export default connect(
  mapStateToProps,
)(MainScreen);
