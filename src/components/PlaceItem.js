import React from 'react';
import mapbox from 'mapbox-gl';

const PlaceItem = ({place, map}) => {

    const goTo = () => {
        map.panTo([place.longitude, place.latitude])
    };

    if (map) {
        const popup = new mapbox.Popup({
            closeButton: false
        })

        popup.setHTML(place.name)

        const marker = new mapbox.Marker({
            color: '#2727e6'
        });
        marker.setLngLat([place.longitude, place.latitude]);
        marker.setPopup(popup);
        marker.addTo(map);
    }
    return (
        <div onClick={goTo} className='place-item'>
            {place.name} {place.latitude} {place.longitude}
        </div>
    )
}

export default PlaceItem;
