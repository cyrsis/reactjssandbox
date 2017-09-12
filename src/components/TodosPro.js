//ES5
// var React = require('react');
//var MyComponent = require('./MyComponent');
import React, { Component } from 'react';
import '../App.css';
import { TodoForm, TodoList, Home, About, Topics } from ".";
import { addTodo, findById, generatedId, toggleTodo, updateTodo, removeTodo } from "./lib/todoHelpers";
import { partial, pipe } from "./lib/utils";
import {addReminder} from "./actions/index";

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

class TodosPro extends Component {
    state = {
        todos: [
            {id: 1, name: "Learn Jsx", isComplete: true},
            {id: 2, name: "Build Awesome Apps", isComplete: false},
            {id: 3, name: "Ship it", isComplete: false}
        ],
        currentTodo: '',
        text:''
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
        const todo = findById(id, this.state.todos)
        const toggled = toggleTodo(todo)
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
            <div>
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

export default TodosPro;
