import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Content from '../Content';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Content />
      </Router>
    );
  }
}

export default App;
