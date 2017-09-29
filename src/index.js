// ES5 + CommonJS
// var React = require('react');
// var MyComponent = require('./MyComponent');

//ES6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);
//To test out some javascript from example dir
//import {constAndLet} from "./examples/constAndLet";
const config = {
    databaseURL: 'https://onpaper-9c248.firebaseio.com',
};
//constAndLet(); //use to test out function, this is great for testing
ReactDOM.render(
    <Provider store={store}>
    <App config={config} />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
