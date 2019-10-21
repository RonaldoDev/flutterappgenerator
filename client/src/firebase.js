import firebase from 'firebase';

const config = {
    apiKey: ${YOUR_API_KEY},
    authDomain: "${YOUR_FIREBASE_DOMAIN}.firebaseapp.com",
    databaseURL: "https://${YOUR_FIREBASE_DOMAIN}r.firebaseio.com",
    projectId: "${YOUR_FIREBASE_DOMAIN}",
    storageBucket: "${YOUR_FIREBASE_DOAMIN}.appspot.com",
    messagingSenderId: "${YOUR_FIREBASE_ID}",
    appId: ${YOUR_APP_KEY}
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const viewsRef = databaseRef.child("template");


export default firebase;

