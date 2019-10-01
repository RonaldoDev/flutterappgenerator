import firebase from 'firebase';

const config = {
   // ** get your own firebase config ** //
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const viewsRef = databaseRef.child("template");


export default firebase;

