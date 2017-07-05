import * as validators from '../validators/RegistrationScreen';

const defaultRegistationForm = {
  username: {
    text: '',
    valid: false,
    status: 'none',
  },
  password: {
    text: '',
    valid: false,
    status: 'none',
  },
  passwordConfirmation: {
    text: '',
    valid: false,
    status: 'none',
  },
  valid: false,
};

function getStatusField(fieldContent) {
  if (fieldContent.text === '') return 'none';
  if (!fieldContent.valid) return 'warning';
  return 'success';
}

export default function RegistrationForm(state = defaultRegistationForm, action) {
  switch (action.type) {
    case 'REGISTRATION_UPDATE_USERNAME':
      state.username.text = action.text;
      state.username.valid = validators.validateUsername(action.text);
      state.username.status = getStatusField(state.username);
      state.valid = validators.validateRegistrationForm(state);
      return { ...state };
    case 'REGISTRATION_UPDATE_PASSWORD':
      state.password.text = action.text;
      state.password.valid = validators.validatePassword(action.text);
      state.passwordConfirmation.valid = validators.validatePasswordConfirmation(
        action.text,
        state.passwordConfirmation.text,
      );
      state.password.status = getStatusField(state.password);
      state.passwordConfirmation.status = getStatusField(state.passwordConfirmation);
      state.valid = validators.validateRegistrationForm(state);
      return { ...state };
    case 'REGISTRATION_UPDATE_PASSWORD_CONFIRMATION':
      state.passwordConfirmation.text = action.text;
      state.passwordConfirmation.valid = validators.validatePasswordConfirmation(
        state.password.text,
        action.text,
      );
      state.passwordConfirmation.status = getStatusField(state.passwordConfirmation);
      state.valid = validators.validateRegistrationForm(state);
      return { ...state };
    case 'REGISTRATION_CLEAR':
      state = defaultRegistationForm;
      return { ...state };
    default:
      return state;
  }
}
