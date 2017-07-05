function validatePassword(password) {
  return password.length > 5;
}

function validatePasswordConfirmation(password, passwordConfirmation) {
  return password === passwordConfirmation;
}

function validateUsername(username) {
  return username.length > 3;
}

function validateRegistrationForm(state) {
  return (state.username.valid
    && state.password.valid
    && state.passwordConfirmation.valid);
}

export default function validateComponent(id, state) {
  switch (id) {
    case 'username':
      return validateUsername(state.username.text);
    case 'password':
      return validatePassword(state.password.text);
    case 'passwordConfirmation':
      return validatePasswordConfirmation(state.password.text, state.passwordConfirmation.text);
    case 'form':
      return validateRegistrationForm(state);
    default:
      return false;
  }
}
