import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App';
import "./src/styles.css";
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
    <Router>
    <App />
  </Router>,
    document.getElementById('root')
)
