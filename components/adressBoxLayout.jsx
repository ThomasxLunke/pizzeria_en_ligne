import React, {useEffect, useState} from 'react'
import { Box, Center } from '@chakra-ui/react'
import AdressBoxForm from './adressBoxForm'
import { useCookies } from 'react-cookie'
import AdressBoxChosed from './adressBoxChosed'
import { useStoreState,useStoreActions } from 'easy-peasy'



const AdressBoxLayout = () => {

    const updateChosedRestaurant = useStoreActions((store) => store.changeChosedRestaurant)
    const chosedRestaurant = useStoreState((state) => state.chosedRestaurant)

    useEffect(() => {
        const userInformation = window.localStorage.getItem('TH_SI_USER_INFO')
        const restaurantInformation = window.localStorage.getItem('TH_SI_RESTAURANT_INFO')
        const deliveryOrTakeAway = window.localStorage.getItem('TH_SI_TAKEAWAYORDELIVERY')


        if (userInformation !== null && deliveryOrTakeAway === "delivery") 
        {
            const user = JSON.parse(userInformation)
            updateChosedRestaurant(user.chosedRestaurant.id)
        }

        if (restaurantInformation !== null && deliveryOrTakeAway === "takeaway")
        {
            const rest = JSON.parse(restaurantInformation)
            updateChosedRestaurant(rest.chosedRestaurant.id)
        }
        
    },[chosedRestaurant])

    return (
        <Box>
            <Center>
                <Box width="500px" marginTop="-220px" bg="white" boxShadow='dark-lg' rounded='md'>
                    {  chosedRestaurant !== "-1" ?
                        (<AdressBoxChosed/>)
                        :
                        (<AdressBoxForm />)
                    }
                </Box>
            </Center>
        </Box>
    )
}

export default AdressBoxLayout
