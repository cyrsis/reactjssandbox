//ES5
// var React = require('react');
//var MyComponent = require('./MyComponent');
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from "./components";
import { addTodo, generatedId } from "./lib/todoHelpers";
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
           todos:[
               {id:1, name:"Learn Jsx" ,iscomplete:true},
               {id:2, name:"Build Awesome Apps" ,iscomplete:false},
               {id:3, name:"Ship it" ,iscomplete:false}
           ],
            currentTodo:''
        }
        this.HandleInputChange= this.HandleInputChange.bind(this)
        this.HandleSubmit= this.HandleSubmit.bind(this)
    }

    HandleInputChange(evt) {
        this.setState({
            currentTodo:evt.target.value,
        });
    }

    HandleSubmit(evt){
        evt.preventDefault() //prevent to make GET
        const newId = generatedId()
        const newTodo = {id: newId,name : this.state.currentTodo,iscomplete :false}
           const updatedTodos= addTodo(this.state.todos,newTodo )
        this.setState({
            todos:updatedTodos,
            currentTodo:''
        });

    }
  render() {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
            <TodoForm
                HandleInputChange={this.HandleInputChange}
            currentTodo={this.state.currentTodo}

                HandleSubmit={this.HandleSubmit}
            />
            <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
//ES5
//module.exports = MyComponent;