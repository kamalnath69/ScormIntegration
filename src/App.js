// src/App.js
import React from 'react';
import './App.css';
import ScormContent from './ScormContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SCORM Content in React</h1>
      </header>
      <main>
        <ScormContent />
      </main>
    </div>
  );
}

export default App;
