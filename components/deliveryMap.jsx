import React, { useRef, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoieGx1bmtlIiwiYSI6ImNsZWxhdjJyZDBqZWgzb29kYWVtbDZsbjgifQ.lkvs0wNfTjei2fI7XnaOAg';


const DeliveryMap = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });
    return (
        <Box ref={mapContainer} height="100%" width="100%" >
           
        </Box>

    )
}

export default DeliveryMap
