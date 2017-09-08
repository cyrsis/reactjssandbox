//ES5
// var React = require('react');
//var MyComponent = require('./MyComponent');
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList , Home , About, Topics } from "./components";
import { addTodo, findById, generatedId, toggleTodo, updateTodo, removeTodo } from "./lib/todoHelpers";
import Terrain from 'react-icons/lib/md/terrain'
import { partial, pipe } from "./lib/utils";


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
            {id: 1, name: "Learn Jsx", isComplete: true},
            {id: 2, name: "Build Awesome Apps", isComplete: false},
            {id: 3, name: "Ship it", isComplete: false}
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

    HandleInputChange = (evt) => {
        this.setState({
            currentTodo: evt.target.value,
        });
    }

    handleToggle = (id) => {
        const getUpdateTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
        // const todo = findById(id, this.state.todos)
        // const toggled = toggleTodo(todo)
        const updatedTodos = getUpdateTodos(id, this.state.todos)

        this.setState({
            todos: updatedTodos,
        });

    }

    HandleSubmit = (evt) => { //ES6 syntax remove binding and set it as properties ->  ES2016 Property Initializer Syntax
        evt.preventDefault() //prevent to make GET
        const newId = generatedId()
        const newTodo = {id: newId, name: this.state.currentTodo, iscomplete: false}
        const updatedTodos = addTodo(this.state.todos, newTodo)
        this.setState({
            todos: updatedTodos,
            currentTodo: '',
            errorMessage: ''
        });
    }

    HandEmptySubmit = (evt) => {
        evt.preventDefault()
        this.setState({
            errorMessage: 'Please supply a todo name',
        });

    }



    render() {
        const submitHandler = this.state.currentTodo ? this.HandleSubmit : this.HandEmptySubmit;
        return (

            <div className="App">
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/topics">Topics</Link></li>
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                    </div>
                </Router>
                <div className="App-header">
                    <Terrain/>
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
                    <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
                </div>


            </div>
        );
    }
}

export default App;
//ES5
//module.exports = MyComponent;