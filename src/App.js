import React, { useState } from 'react';
import Map from './components/Map';
import ToggleMode from './components/ToggleMode';
import './App.css';

function App() {
  const [ latitude, setLatitude ] = useState(40.7128);
  const [ longtitude, setLongtitude ] = useState(-74.0060);
  const [ style, setStyle ] = useState('mapbox://styles/mapbox/dark-v10');

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ToggleMode style={style} setStyle={setStyle} />
      <Map const latitude = {latitude} longtitude={longtitude} style={style}/>
    </div>
  );
}

export default App;
