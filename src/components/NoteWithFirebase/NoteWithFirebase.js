import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import Form from './Form';
import {NoteHeader} from './NoteHeader';
import Grid from './Grid';


// define here any variables such as styles, propTypes, etc.


class NoteWithFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:[],
            currentTitle:'',
            currentDetails:'',
            name: 'Note With Firebase'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBQ6FZfyzpyICkXTf60o3TU3H39DkWJCq4",
            authDomain: "onpaper-9c248.firebaseapp.com",
            databaseURL: "https://onpaper-9c248.firebaseio.com",
            projectId: "onpaper-9c248",
            storageBucket: "onpaper-9c248.appspot.com",
            messagingSenderId: "665577702717"
        });

        // refactor this one a bit for best practices ES6
        firebase.database().ref('/notes')
            .on('value', (snapshot) => {
                const fbStore = snapshot.val();
                // converting firebase object to array
                const store = _.map(fbStore, (value, id) => ({
                    id,
                    title: value.title,
                    details: value.details,
                }));
                // updating the state
                this.setState({
                    notes: store,
                });
            });
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: this.state.currentTitle,
            details: this.state.currentDetails,
        };
        firebase.database().ref('/notes').push(data, response => response);
        // feel free to keep the alert or not
        // alert(`Your note ${this.state.currentTitle} has been added!!!`);

        this.setState({
            currentTitle: '',
            currentDetails: '',
        });
    }


    deleteNote(id) {
        firebase.database().ref(`/notes/${id}`)
            .remove();
        // feel free to keep the alert or not
        // alert('Successfully deleted!');
    }

    render() {
        return (
            <div >
                <NoteHeader name={this.state.name} />
                <Form
                    // do the bind in the corresponding syntax video
                    currentTitle={this.state.currentTitle}
                    currentDetails={this.state.currentDetails}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Grid notes={this.state.notes} deleteNote={this.deleteNote} />
            </div>
        );
    }
}

export default NoteWithFirebase;
