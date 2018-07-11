import React, { Component } from 'react';
import './App.css';
import data from './data/data.json'
import { DisplayText } from "./components/DisplayText";


class App extends Component {


    render() {

        return <div className="App">
            <h1>Hers is the thing about react</h1>
            <p>how some this is not working?</p>
            <br/>

             <DisplayText {...data}/>
            <p>Something here</p>
        </div>;
    }
}


export default App;
//ES5
//module.exports = MyComponent;