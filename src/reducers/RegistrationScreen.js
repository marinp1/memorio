import validateComponent from '../validators/RegistrationScreen';

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

function getModifiedField(id, oldState) {
  const newState = oldState;
  newState[id].valid = validateComponent(id, newState);
  newState[id].status = getStatusField(newState[id]);
  newState.valid = validateComponent('form', newState);
  return newState;
}

function getEmptyState(state) {
  const blocksToClean = ['username', 'password', 'passwordConfirmation'];

  blocksToClean.forEach((block) => {
    state[block].text = '';
    state[block].valid = false;
    state[block].status = 'none';
  });

  state.valid = false;

  return state;
}

export default function RegistrationForm(state = defaultRegistationForm, action) {
  switch (action.type) {
    case 'REGISTRATION_UPDATE_USERNAME':
      state.username.text = action.text;
      state = getModifiedField('username', state);
      return { ...state };
    case 'REGISTRATION_UPDATE_PASSWORD':
      state.password.text = action.text;
      state = getModifiedField('password', state);
      state = getModifiedField('passwordConfirmation', state);
      return { ...state };
    case 'REGISTRATION_UPDATE_PASSWORD_CONFIRMATION':
      state.passwordConfirmation.text = action.text;
      state = getModifiedField('passwordConfirmation', state);
      return { ...state };
    case 'REGISTRATION_CLEAR':
      state = getEmptyState(state);
      return { ...state };
    default:
      return state;
  }
}
