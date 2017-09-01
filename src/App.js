//ES5
// var React = require('react');
//var MyComponent = require('./MyComponent');
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ES5
// var Photo = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <images alt={this.props.description} src={this.props.src} />
//             </div>
//         );
//     }
// });
// ReactDOM.render(<Photo />, document.getElementById('main'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list: [1,2,3]
        }
    }
  render() {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
//ES5
//module.exports = MyComponent;