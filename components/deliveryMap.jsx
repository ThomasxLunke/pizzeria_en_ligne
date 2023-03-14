import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { useStoreState } from 'easy-peasy';
import Map, {Marker} from 'react-map-gl';
import Image from 'next/image';



const DeliveryMap = () => {

    const longitudeRestaurant = useStoreState((state) => state.longitudeRestaurant)
    const latitudeRestaurant = useStoreState((state) => state.latitudeRestaurant)
    return (
        <Map
            initialViewState={{
                latitude: latitudeRestaurant,
                longitude: longitudeRestaurant,
                zoom: 14
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1IjoieGx1bmtlIiwiYSI6ImNsZWxhdjJyZDBqZWgzb29kYWVtbDZsbjgifQ.lkvs0wNfTjei2fI7XnaOAg"
        >
            <Marker longitude={longitudeRestaurant} latitude={latitudeRestaurant} anchor="bottom" />
            
        </Map>
    )
}

export default DeliveryMap
