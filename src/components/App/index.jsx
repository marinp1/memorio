import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import reducers from '../../reducers';
// Components
import Content from '../Content';
// Database
import * as dbFunctions from '../../db';

dbFunctions.createDb();

const asyncDispatchMiddleware = store => next => (action) => {
  let syncActivityFinished = false;
  let actionQueue = [];

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithAsyncDispatch =
    Object.assign({}, action, { asyncDispatch });

  next(actionWithAsyncDispatch);
  syncActivityFinished = true;
  flushQueue();
};

const store = createStore(reducers, applyMiddleware(asyncDispatchMiddleware));

class App extends React.Component {

  componentDidMount() {
    dbFunctions.addUser('tiivi', 'taavi');
    console.log('Added user tiivi:taavi');
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Content />
        </Provider>
      </Router>
    );
  }
}

export default App;
