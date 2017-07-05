export function validatePassword(password) {
  return password.length > 5;
}

export function validatePasswordConfirmation(password, passwordConfirmation) {
  return password === passwordConfirmation;
}

export function validateUsername(username) {
  return username.length > 3;
}

export function validateRegistrationForm(state) {
  return (state.username.valid
    && state.password.valid
    && state.passwordConfirmation.valid);
}
