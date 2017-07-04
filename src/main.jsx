import React from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import LoginRegistrationScreen from './components/LoginScreen';

class Content extends React.Component {
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

class Main extends React.Component {
  render() {
    return (
        <Router>
            <Content />
        </Router>
    );
  }
}

export default Main;
