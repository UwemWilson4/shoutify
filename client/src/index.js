import React from 'react';
import ReactDOM from 'react-dom';
// added to reduce import
import { render } from 'react-dom';
import App from './App';
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


