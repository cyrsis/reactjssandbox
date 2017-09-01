// ES5 + CommonJS
// var React = require('react');
// var MyComponent = require('./MyComponent');

//ES6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//To test out some javascript from example dir
//import {constAndLet} from "./examples/constAndLet";

//constAndLet(); //use to test out function, this is great for testing
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
