import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Content from './components/Content';

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
