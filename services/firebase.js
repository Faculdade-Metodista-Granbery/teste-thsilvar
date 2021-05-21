import firebase from 'firebase/app';
import 'firebase/firebase-database';

console.log(process.env)

const config = {
    apiKey: "AIzaSyAwiW1pTod8jxV8MlhtbzMzs27VR1l8CLk",
    authDomain: "coffee-a7e8c.firebaseapp.com",
    databaseURL: "https://coffee-a7e8c.firebaseio.com",
    projectId: "coffee-a7e8c",
    storageBucket: "coffee-a7e8c.appspot.com",
    messagingSenderId: "108957040793",
    appId: "1:108957040793:web:fac475e46249060ed8b808"
}

firebase.initializeApp(config);

const db = firebase.database().ref();

const getAll = () => {
    return db;
}

export default {
    getAll,
};