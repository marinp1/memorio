import { combineReducers } from 'redux';
import General from './General';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';

export default combineReducers({
  General,
  LoginScreen,
  RegistrationScreen,
});
