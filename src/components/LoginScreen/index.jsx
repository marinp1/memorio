import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginRegistrationScreen from './LoginRegistrationScreen';

require('./style.scss');

export default withRouter(props => <LoginRegistrationScreen {...props} />);
