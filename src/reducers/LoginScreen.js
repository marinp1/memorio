const defaultLoginForm = {
  username: {
    text: '',
    status: 'none',
  },
  password: {
    text: '',
    status: 'none',
  },
  valid: false,
};

function checkFormValidity(state) {
  return (state.username.text !== '' && state.password.text !== '');
}

function getEmptyState(state) {
  state.username.text = '';
  state.username.status = 'none';
  state.password.text = '';
  state.password.status = 'none';
  state.valid = false;
  return state;
}

export default function LoginForm(state = defaultLoginForm, action) {
  switch (action.type) {
    case 'LOGIN_UPDATE_USERNAME':
      state.username.text = action.text;
      state.valid = checkFormValidity(state);
      return { ...state };
    case 'LOGIN_UPDATE_PASSWORD':
      state.password.text = action.text;
      state.valid = checkFormValidity(state);
      return { ...state };
    case 'LOGIN_CLEAR':
      state = getEmptyState(state);
      return { ...state };
    default:
      return state;
  }
}
