//ES5
// var React = require('react');
//var MyComponent = require('./MyComponent');
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import TodosPro from './components/TodosPro'
import { Home, About, Topics, Footer, PropsDemo, InlineDemo } from "./components";
import { addTodo, findById, generatedId, toggleTodo, updateTodo, removeTodo } from "./lib/todoHelpers";
import { partial, pipe } from "./lib/utils";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder } from "./actions/index";
import {NoteWithFirebaseStatic} from "./components/NoteWithFirebase/NoteWithFirebaseStatic";
import PokeDashBoard from "./components/PokeApi/PokeDashBoard";
import {CountDown} from './components/CountDown/CountDown'
import {Whoops404} from './components/Whoops404'
import { ChatStateless } from "./components/ChatMobx/ChatStateless";


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
        currentTodo: '',
        text: ''
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

    addReminder() {
        console.log('this', this);
        this.props.addReminder(this.state.text)
    }

    render() {

        return (
            <div className="App">
                <Router>
                    <div>
                        <header>
                            <div className="container header inner">
                                <nav className="navbar">
                                    <div className="container">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                    data-target="#myNavbar">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                            <a className="navbar-brand" href="#">Onpaper</a>
                                        </div>
                                        <div className="collapse navbar-collapse" id="myNavbar">
                                            <ul className="nav navbar-nav navbar-right masthead-nav">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/PropsDemo">PropsDemo</Link></li>
                                                <li><Link to="/CountDown">CountDown</Link></li>
                                                <li><Link to="/TodosPro">TodosPro</Link></li>
                                                <li><Link to="/InlineDemo">InlineDemo</Link></li>
                                                <li><Link to="/NoteWithFirebase">NoteWithFirebase</Link></li>
                                                <li><Link to="/PokeDashBoard">PokeDashBoard</Link></li>
                                                <li><Link to="/ChatApp">ChatApp</Link></li>
                                                <li><Link to="/topics">Topics</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </header>
                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/PropsDemo" component={PropsDemo}/>
                        <Route path="/CountDown" component={CountDown}/>
                        <Route path="/InlineDemo" component={InlineDemo}/>
                        <Route path="/NoteWithFirebase" component={NoteWithFirebaseStatic}/>
                        <Route path="/PokeDashBoard" component={PokeDashBoard}/>
                        <Route path="/ChatApp" component={ChatStateless}/>
                        <Route path="/topics" component={Topics}/>
                        <Route path="/TodosPro" component={TodosPro}/>
                        <Route path="*" component={Whoops404} />
                    </div>
                </Router>


                <Footer/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder}, dispatch);
}


export default connect(null, mapDispatchToProps)(App);
//ES5
//module.exports = MyComponent;