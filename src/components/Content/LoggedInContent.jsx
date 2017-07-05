import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainScreen from '../MainScreen';

export default class LoggedInContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="*" component={MainScreen} />
      </Switch>
    );
  }
}
