import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './Components/App'
import './style.css';



render(
  <Router>
  <App />
  </Router>, document.getElementById('root'));
