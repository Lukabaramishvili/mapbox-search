import React from 'react';
import PlaceItem from './PlaceItem';
import '../styles/PlacesPanel.css';

const PlacesPanel = ({places, map}) => {

    let placeItems = <div className='no-results'>Nothing added yet</div>;
    if (places.length > 0) {
        placeItems = places.map((place, index) => {
            return <PlaceItem key={index} place={place} map={map}/>
        })
    }

    return (
        <div className='places'>
            {placeItems}
        </div>
    )
}

export default PlacesPanel;
