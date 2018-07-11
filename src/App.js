import React, { Component } from 'react';
import './App.css';
import data from './data/data.json'


class App extends Component {


    render() {

        return <div className="App">
            <h1>Hers is {data[2].last_name}the thing {data[1].first_name} about react</h1>
            <p>how some this is not working?</p>
            <br/>
            <p>Something here</p>
        </div>;
    }
}


export default App;
//ES5
//module.exports = MyComponent;