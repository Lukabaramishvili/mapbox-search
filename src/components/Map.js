import React, { useEffect } from 'react';
import mapbox from 'mapbox-gl';
import '../styles/Map.css';

const Map = ({longtitude, latitude, style}) => {

useEffect(() => {
    mapbox.accessToken = 'pk.eyJ1IjoibHVrYWJhcmFtaXNodmlsaSIsImEiOiJja2Y3ejhtY2owNzVzMnlxeWRocmNnbGN2In0.EEBKjGZWmJyuaT1gvTat0A';
    const map = new mapbox.Map({
    container: 'map',
    style: style,
    center: [
        longtitude,
        latitude
    ],
    zoom: 12
});

    const navigationControl = new mapbox.NavigationControl();

    map.addControl(navigationControl);
    }, [longtitude, latitude, style])
    return (
        <div id='map'>
            Map
        </div>
    )
}

export default Map;
