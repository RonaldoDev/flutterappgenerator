import React from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutGeneratorContainer from './layout/layoutGenerator.container';

function App() {
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

export default App;
