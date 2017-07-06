import { getUser } from '../db';

function login(username, password) {
  return new Promise((resolve, reject) => {
    const validUsername = getUser(username, password);
    if (validUsername !== false) {
      resolve(username);
    } else {
      reject('Invalid username/password combination');
    }
  });
}

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
    case 'LOGIN_SUBMIT': {
      login(state.username.text, state.password.text).then((username) => {
        action.asyncDispatch({
          type: 'GENERAL_LOGIN', text: username,
        });
      }).catch((error) => {
        console.log(error);
      });
      return state;
    }
    default:
      return state;
  }
}
