import React, { Component } from 'react';
import Home from './Home';
import Snackalong from './snackalong/Snackalong';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Snackalong path="/snackalong" />
      </Router>
    );
  }
}

export default App;
