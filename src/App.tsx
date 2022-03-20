import React from 'react';
import './App.css';
import { SimpleMap } from './simplemap';
const locations = require("./locations.json");

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SimpleMap location={location} />
      </header>
    </div>
  );
}

export default App;
