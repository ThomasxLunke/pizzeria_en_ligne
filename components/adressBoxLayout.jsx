import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import AdressBoxForm from './adressBoxForm'
import { useCookies } from 'react-cookie'
import AdressBoxChosed from './adressBoxChosed'
import { useStoreState,useStoreActions } from 'easy-peasy'



const AdressBoxLayout = () => {

    const chosedRestaurant = useStoreState((state) => state.chosedRestaurant)

    return (
        <Box>
            <Center>
                <Box width="500px" marginTop="-220px" bg="white" boxShadow='dark-lg' rounded='md'>
                    {  chosedRestaurant !== -1 ?
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
