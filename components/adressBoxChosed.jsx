import React, { useEffect, useState } from 'react'
import { Box, Text, Flex, Button, Center, Link } from '@chakra-ui/react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';



const AdressBoxChosed = () => {

    //delivery info
    const [userInfos, setUserInfos] = useState({})
    const [takeAwayOrDelivery, setTakeAwayOrDelivery] = useState("")
    const [streetName, setStreetName]   = useState("")
    const [streetNumber, setStreetNumber]   = useState("")
    const [zipCode, setZipCode] = useState("")

    //restaurant info
    const [restaurantInfos, setRestaurantInfos] = useState({})
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")

    const chosedRestaurant = useStoreState((state) => state.chosedRestaurant)
    const updateChosedRestaurant = useStoreActions((store) => store.changeChosedRestaurant)

    useEffect(() => {
        const userInformation = window.localStorage.getItem('TH_SI_USER_INFO')
        const restaurantInformation = window.localStorage.getItem('TH_SI_RESTAURANT_INFO')
        const deliveryOrTakeAway = window.localStorage.getItem('TH_SI_TAKEAWAYORDELIVERY')

        if (userInformation !== null && deliveryOrTakeAway === "delivery") 
        {
            const user = JSON.parse(userInformation)
            setUserInfos(user)
            setTakeAwayOrDelivery(deliveryOrTakeAway)
            setStreetName(user.adress.streetName)
            setStreetNumber(user.adress.streetNumber)
            setZipCode(user.adress.zipCode)
            updateChosedRestaurant(user.chosedRestaurant.id)
        }

        if (restaurantInformation !== null && deliveryOrTakeAway === "takeaway")
        {
            const rest = JSON.parse(restaurantInformation)
            setRestaurantInfos(rest)
            setStreetName(rest.adress.streetName)
            setStreetNumber(rest.adress.streetNumber)
            setCity(rest.adress.city)
            setDistrict(rest.adress.district)
            setZipCode(rest.adress.zipCode)
            setTakeAwayOrDelivery(deliveryOrTakeAway)
            updateChosedRestaurant(rest.chosedRestaurant.id)
        }   
    }, [])
    
    const router = useRouter()

    const resetAdress = (() => {
        const userInformation = window.localStorage.getItem('TH_SI_USER_INFO')
        const restaurantInformation = window.localStorage.getItem('TH_SI_RESTAURANT_INFO')
        const deliveryOrTakeAway = window.localStorage.getItem('TH_SI_TAKEAWAYORDELIVERY')

        if (userInformation !== null && deliveryOrTakeAway === "delivery") 
        {
            const user = JSON.parse(userInformation)
            user.chosedRestaurant.id = "-1"
            window.localStorage.setItem('TH_SI_USER_INFO', JSON.stringify(user))
            
        }

        if (restaurantInformation !== null && deliveryOrTakeAway === "takeaway") 
        {
            const rest = JSON.parse(restaurantInformation)
            rest.chosedRestaurant.id = "-1"
            window.localStorage.setItem('TH_SI_RESTAURANT_INFO', JSON.stringify(rest))
            
        }

        if (restaurantInformation !== null && deliveryOrTakeAway !==null)
        {
            const rest = JSON.parse(restaurantInformation)
            rest.chosedRestaurant.id = "-1"
            window.localStorage.setItem('TH_SI_RESTAURANT_INFO', JSON.stringify(rest))
            const user = JSON.parse(userInformation)
            user.chosedRestaurant.id = "-1"
            window.localStorage.setItem('TH_SI_USER_INFO', JSON.stringify(user))
        }
        updateChosedRestaurant("-1")
        
    })
    return (
        <Box>
            {
                takeAwayOrDelivery === "delivery" ? (

                    <Box padding="1rem">
                        <Text fontSize="xl" fontWeight="bold">VOS PIZZAS LIVRÉES 7/7J</Text>
                        <Text>Nous vous invitons à privilégier le paiement en ligne <Text as="span" textDecor="underline">En savoir plus</Text></Text>
                        <Flex bg="gray.200" align="center" justify="center" flexDirection="column" padding="15px" borderRadius="md" marginTop="30px">
                            <Text fontSize="sm">Livraison au</Text>
                            <Text fontSize="large" fontWeight="bold">{streetNumber}, {streetName}</Text>
                            <Text fontSize="large" fontWeight="bold"> {zipCode} </Text>
                        </Flex>
                        <Button 
                            marginTop="30px" 
                            colorScheme='whatsapp' 
                            width="100%" 
                            onClick={() => {
                                if (chosedRestaurant !== "-1"){
                                    router.push('/order/menupromo')
                                }
                            }}
                        >
                            Commencer ma commande
                        </Button>
                        <Center mt="10px">
                            <Link color="green.600" onClick={() => resetAdress()}>Choisir un autre Pizza Hut</Link>
                        </Center>
                    </Box>) : (


                    <Box padding="1rem">
                        <Text fontSize="xl" fontWeight="bold">CLICK & COLLECT</Text>
                        <Text>Vous pouvez commander à emporter dans votre Pizza Hut sans pass sanitaire.</Text>
                        <Flex bg="gray.200" align="center" justify="center" flexDirection="column" padding="15px" borderRadius="md" marginTop="30px">
                            <Text fontSize="sm">Vente à emporter</Text>
                            <Text fontSize="large" fontWeight="bold">{city} {district}</Text>
                            <Text fontSize="large" fontWeight="bold"> {streetNumber} {streetName}, {city} </Text>
                        </Flex>
                        <Button 
                        marginTop="30px" 
                        colorScheme='whatsapp' 
                        width="100%" 
                        onClick={() => {
                            if (chosedRestaurant !== "-1"){
                                router.push('/order/menupromo')
                            }
                        }}
                        >
                            Commencer ma commande
                        </Button>
                        <Center mt="10px">
                            <Link color="green.600" onClick={() => resetAdress()}>Choisir un autre Pizza Hut</Link>
                        </Center>
                    </Box>)
            }

        </Box>
    )
}

export default AdressBoxChosed
