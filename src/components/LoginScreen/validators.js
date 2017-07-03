export function validatePassword(password) {
    return password.length > 5;
}

export function validateUserName(username) {
    return username.length > 3;
}

export function validateRegistrationform(username, password, passwordConfirmation) {

    if (validateUserName(username) && validatePassword(password)) {
        if (password === passwordConfirmation)  {
            return true;
        }
    }

    return false;

}

export function checkPasswordFieldStatus(isRetype, password, passwordConfirmation) {

    if (password === '') {
        return 'none';
    }

    if (!isRetype) {
        if (validatePassword(password)) {
            return 'success';
        } else {
            return 'warning';
        }
    }

    if (password === passwordConfirmation) {
        return 'success';
    } else {
        return 'warning';
    }

}

export function checkUsernameFieldStatus(username) {

    if (username === '') {
        return 'none';
    }

    if (validateUserName(username)) {
        return 'success';
    } else {
        return 'warning';
    }

}