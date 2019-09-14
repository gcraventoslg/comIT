/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
//registerServiceWorker.unregister();
