import React from 'react';
import '../styles/ToggleMode.css';

const ToggleMode = ({style, setStyle}) => {

    const styles = [
        {name: 'Sattelite', url: 'mapbox://styles/mapbox/satellite-v9'},
        {name: 'Dark', url: 'mapbox://styles/mapbox/dark-v10'},
        {name: 'Light', url: 'mapbox://styles/mapbox/light-v10'}
    ]

    const setStyleMode = (url) => {
        setStyle(url)
    }

    const buttons = styles.map(style => {
        return <button onClick={() => setStyleMode(style.url)} key={style.name}>{style.name}</button>
    })
    return (
        <div className='toggleMode'>
            {buttons}
            {style}
        </div>
    )
}

export default ToggleMode
