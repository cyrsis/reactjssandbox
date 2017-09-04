import * as firebase from 'firebase'
let database
export const init = () => {
    let config = {
        apiKey: "AIzaSyBQ6FZfyzpyICkXTf60o3TU3H39DkWJCq4",
        authDomain: "onpaper-9c248.firebaseapp.com",
        databaseURL: "https://onpaper-9c248.firebaseio.com",
        projectId: "onpaper-9c248",
        storageBucket: "onpaper-9c248.appspot.com",
        messagingSenderId: "665577702717"
    }
    firebase.initializeApp(config)
    database = firebase.database()
}