import { combineReducers } from 'redux';
import General from './General';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import CurrentRoute from './Route';

export default combineReducers({
  CurrentRoute,
  General,
  LoginScreen,
  RegistrationScreen,
});
