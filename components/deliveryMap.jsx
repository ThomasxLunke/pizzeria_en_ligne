import React, { useRef, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { useStoreState } from 'easy-peasy';
import Map, {Marker} from 'react-map-gl';
import Image from 'next/image';



const DeliveryMap = () => {


    const longitudeRestaurant = useStoreState((state) => state.longitudeRestaurant)
    const latitudeRestaurant = useStoreState((state) => state.latitudeRestaurant)

    const [lng, setLng] = useState(longitudeRestaurant);
    const [lat, setLat] = useState(latitudeRestaurant);
    const [zoom, setZoom] = useState(15);

    console.log(lng)


    return (
        <Map
            initialViewState={{ longitude: lng, latitude: lat, zoom: zoom }}
            style={{width:"100%", height:"100%"}}
            mapboxAccessToken='pk.eyJ1IjoieGx1bmtlIiwiYSI6ImNsZWxhdjJyZDBqZWgzb29kYWVtbDZsbjgifQ.lkvs0wNfTjei2fI7XnaOAg'
            mapStyle="mapbox://styles/mapbox/streets-v9" >
            <Marker longitude={lng} latitude={lat} color='#3FB1CE' />
        </Map>

    )
}

export default DeliveryMap
