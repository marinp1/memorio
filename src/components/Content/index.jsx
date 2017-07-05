import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import LoggedInContent from './LoggedInContent';
import LoggedOutContent from './LoggedOutContent';

class Content extends React.Component {
  render() {
    return (this.props.generals.loggedIn) ? <LoggedInContent /> : <LoggedOutContent />;
  }
}

Content.propTypes = {
  generals: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  generals: state.General,
});

export default connect(
  mapStateToProps,
)(Content);
