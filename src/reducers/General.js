const defaultGenerals = {
  loggedIn: false,
  currentlyLoggedInUser: '',
};

export default function LoginForm(state = defaultGenerals, action) {
  switch (action.type) {
    case 'GENERAL_LOGIN':
      state.loggedIn = true;
      state.currentlyLoggedInUser = action.text;
      return { ...state };
    case 'GENERAL_LOGOUT':
      state = defaultGenerals;
      return { ...state };
    default:
      return state;
  }
}
