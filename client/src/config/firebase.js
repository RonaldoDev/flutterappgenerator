import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDT5qI3Mp8TfCRkzkDmGlCwmwco-BUUckc",
    authDomain: "flutterappgenerator.firebaseapp.com",
    databaseURL: "https://flutterappgenerator.firebaseio.com",
    projectId: "flutterappgenerator",
    storageBucket: "flutterappgenerator.appspot.com",
    messagingSenderId: "809917831322",
    appId: "1:809917831322:web:aa8025ffeeaa2a5fa02723"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const viewsRef = databaseRef.child("template");


export default firebase;