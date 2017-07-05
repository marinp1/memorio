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
      state = defaultLoginForm;
      return { ...state };
    default:
      return state;
  }
}
