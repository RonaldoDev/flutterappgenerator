import React from 'react';
import './App.css';
import LayoutGeneratorContainer from './layoutEditor/layoutGenerator.container';
import i18n from "i18next";
import resources from './i18n';


function App() {
  let userLang = navigator.language || navigator.userLanguage; 
  init18n(userLang);
  console.log(userLang);
  return (
    <div className="App">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <header className="App-header">
        <LayoutGeneratorContainer />
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

export default App;
