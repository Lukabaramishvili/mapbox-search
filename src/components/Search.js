import React, { useState } from 'react';
import '../styles/Search.css';

const Search = ({places, setPlaces}) => {
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    const accessToken = 'pk.eyJ1IjoibHVrYWJhcmFtaXNodmlsaSIsImEiOiJja2Y3ejhtY2owNzVzMnlxeWRocmNnbGN2In0.EEBKjGZWmJyuaT1gvTat0A';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${accessToken}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            const firstResult = data.features[0]
            let newPlace = {
                name: searchValue,
                longitude: firstResult.center[0],
                latitude: firstResult.center[1]
            }
    
            if (searchValue === '') {
                alert('Please enter the location name')
            }
            else {
                places.push(newPlace);
                setPlaces(places); 
            }
            setSearchValue('');
            console.log(searchValue)
        })
}


    return (
        <form onSubmit={handleSubmit}>
            <input value={searchValue} onChange={handleSearchValue} placeholder='Add place...'/>
        </form>
    )
}

export default Search;
