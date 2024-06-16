import './App.css';
import MonacoEditor from "./components/JsonEditor";
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JSON Schema Validator</h1>
          <MonacoEditor />
        </header>
    </div>
  );
}

export default App;
