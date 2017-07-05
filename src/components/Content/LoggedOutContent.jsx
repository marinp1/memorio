import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginRegistrationScreen from '../LoginScreen';

export default class LoggedOutContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/register" component={LoginRegistrationScreen} />
        <Route path="/login" component={LoginRegistrationScreen} />
        <Route
          path="*"
          render={() => (
            <Redirect to="/register" />
          )}
        />
      </Switch>
    );
  }
}
