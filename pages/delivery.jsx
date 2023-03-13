/* eslint-disable import/extensions */
import React from 'react'
import { Box } from '@chakra-ui/react'
import DeliveryMap from '@/components/deliveryMap'
import DeliveryTimeline from '@/components/deliveryTimeline'

const Delivery = () => {

    return (
        <Box>
            <Box width="100%" height="200px" >
                <DeliveryTimeline />
            </Box>
            <Box width="100%" height="calc(100vh - 200px)">
                <DeliveryMap />
            </Box>

        </Box>
    )
}

export default Delivery
