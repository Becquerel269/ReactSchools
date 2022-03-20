import React from 'react';
import './App.css';
import { SimpleMap } from './simplemap';
const locations = require("./locations.json");

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SimpleMap name={"jude"} />
      </header>
    </div>
  );
}

export default App;
