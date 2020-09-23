import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import ToggleMode from './components/ToggleMode';
import Search from './components/Search';
import PlacesPanel from './components/PlacesPanel';
import './App.css';

function App() {

  let placesArr = [
    {name: 'Bedford', latitude: 40, longtitude: -72}
  ];

  const [ map, setMap ] = useState(null);
  const [ latitude, setLatitude ] = useState(40.7128);
  const [ longtitude, setLongtitude ] = useState(-74.0060);
  const [ style, setStyle ] = useState('mapbox://styles/mapbox/dark-v10');
  const [ places, setPlaces ] = useState(placesArr);

  useEffect(() => {
    console.log(places)
  }, [places])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PlacesPanel places={places} map={map}/>
      <Search places={places} setPlaces={setPlaces} placesArr={placesArr}/>
      <ToggleMode style={style} setStyle={setStyle} />
      <Map latitude = {latitude} longtitude={longtitude} style={style} map={map} setMap={setMap}/>
    </div>
  );
}

export default App;
