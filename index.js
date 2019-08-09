import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}

render(
  <Router>
  <App />
  </Router>, document.getElementById('root'));
