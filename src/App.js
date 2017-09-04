//ES5
// var React = require('react');
//var MyComponent = require('./MyComponent');
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from "./components";
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
    state = {
        todos: [
            {id: 1, name: "Learn Jsx", iscomplete: true},
            {id: 2, name: "Build Awesome Apps", iscomplete: false},
            {id: 3, name: "Ship it", iscomplete: false}
        ],
        currentTodo: ''
    }
    // constructor(props) {
    //     super(props);
    //
    //     // this.HandleInputChange = this.HandleInputChange.bind(this)
    //     // this.HandleSubmit = this.HandleSubmit.bind(this)
    //     // this.HandEmptySubmit=this.HandEmptySubmit.bind(this)
    // }

    HandleInputChange =(evt) => {
        this.setState({
            currentTodo: evt.target.value,
        });
    }

    HandleSubmit =(evt) => { //ES6 syntax remove binding and set it as properties ->  ES2016 Property Initializer Syntax
        evt.preventDefault() //prevent to make GET
        const newId = generatedId()
        const newTodo = {id: newId, name: this.state.currentTodo, iscomplete: false}
        const updatedTodos = addTodo(this.state.todos, newTodo)
        this.setState({
            todos: updatedTodos,
            currentTodo: '',
            errorMessage:''
        });
    }

    HandEmptySubmit=(evt)=>{
        evt.preventDefault()
        this.setState({
            errorMessage:'Please supply a todo name',
        });

    }

    render() {
        const submitHandler = this.state.currentTodo ? this.HandleSubmit:this.HandEmptySubmit;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React Todos</h2>
                </div>
                <div className="Todo-App">
                    {this.state.errorMessage && <span className='error'> {this.state.errorMessage}</span>}
                    <TodoForm
                        HandleInputChange={this.HandleInputChange}
                        currentTodo={this.state.currentTodo}

                        HandleSubmit={submitHandler}
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