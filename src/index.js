import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {constAndLet} from "./examples/constAndLet";

constAndLet(); //use to test out function, this is great for testing
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
