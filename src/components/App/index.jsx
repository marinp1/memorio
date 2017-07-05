import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import reducers from '../../reducers';
// Components
import Content from '../Content';

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Content />
        </Router>
      </Provider>
    );
  }
}

export default App;
