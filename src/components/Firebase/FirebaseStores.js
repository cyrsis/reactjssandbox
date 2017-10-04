import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBQ6FZfyzpyICkXTf60o3TU3H39DkWJCq4",
    authDomain: "onpaper-9c248.firebaseapp.com",
    databaseURL: "https://onpaper-9c248.firebaseio.com",
    projectId: "onpaper-9c248",
    storageBucket: "onpaper-9c248.appspot.com",
    messagingSenderId: "665577702717"
};
firebase.initializeApp(config);

const root = firebase.database().ref();
const todos = firebase.database().ref('todos');

const Fb = {
    root,
    todos
};
export { Fb };