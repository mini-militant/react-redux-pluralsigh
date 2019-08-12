import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './Components/App'
import './style.css';
import ConfigureStore from './Redux/ConfigureStore' 
import {Provider} from 'react-redux'

const store=ConfigureStore();


render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
  
  );
