import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import LoggedInContent from './LoggedInContent';
import LoggedOutContent from './LoggedOutContent';

class Content extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.handleRouteChange(nextProps.location.pathname);
    }
  }

  render() {
    return (this.props.generals.loggedIn) ? <LoggedInContent /> : <LoggedOutContent />;
  }
}

Content.propTypes = {
  generals: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  handleRouteChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  generals: state.General,
});

const mapDispatchToProps = dispatch => ({
  handleRouteChange: (newRoute) => {
    dispatch({
      type: 'ROUTE_UPDATE',
      text: newRoute,
    });
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content));
