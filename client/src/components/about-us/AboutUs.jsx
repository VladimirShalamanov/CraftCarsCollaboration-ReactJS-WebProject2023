import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import "./aboutUs.css";

const containerStyle = {
    width: '500px',
    height: '700px',
};

const center = {
    lat: 42.612340,
    lng: 24.972356,
};

const GOOGLE_MAPS_API_KEY = "AIzaSyA8MV0kSh2CSkg4l1cqEWwayPemnWBCtDc";

export default function AboutUs() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    });

    const mapRef = React.useRef();

    const onLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Maps";

    return (
        <section className='about-us-page'>
            <div className='container'>
                <div className='about-us-info'>
                    <h1><FontAwesomeIcon icon={faEnvelope} />craft.cars.collaboration@gmail.com</h1>
                    <h1><FontAwesomeIcon icon={faPhoneVolume} />08 77 922 999</h1>
                </div>

                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                />
            </div>
        </section>
    );
};