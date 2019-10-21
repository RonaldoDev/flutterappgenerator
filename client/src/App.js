import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import './App.css';
import LayoutGeneratorContainer from './layoutEditor/layoutGenerator.container';
import i18n from "i18next";
import resources from './config/i18n';
import firebase from './config/firebase';

function App(props) {
  let userLang = navigator.language || navigator.userLanguage; 
  init18n(userLang);
  const {
    user,
    signInWithGoogle,
  } = props;
  return (
    <div className="App">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <header className="App-header">
      {
            user
              ?  <LayoutGeneratorContainer user={user} />
              : <p>Please sign in.</p>
          }

          {
            !user && <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
      </header>
      
    </div>
  );
}
function init18n(userLang) {
  i18n.init({
    resources,
    lng: userLang
  });
}
const firebaseAppAuth = firebase.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
