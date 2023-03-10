import React from 'react'
import { Box, Text, Flex, Button, Center, Link } from '@chakra-ui/react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';



const AdressBoxChosed = () => {
    const updateChosedRestaurant = useStoreActions((store) => store.changeChosedRestaurant)
    const updateStreetName = useStoreActions((store) => store.changeStreetName)
    const updateStreetNumber = useStoreActions((store) => store.changeStreetNumber)
    const updateTakeAwayOrDelivery = useStoreActions((store) => store.changeTakeAwayOrDelivery)
    const updateZipCode = useStoreActions((store) => store.changeZipCode)

    const takeAwayOrDelivery = useStoreState((state) => state.takeAwayOrDelivery)
    const streetName = useStoreState((state) => state.streetName)
    const streetNumber = useStoreState((state) => state.streetNumber)
    const zipCode = useStoreState((state) => state.zipCode)
    const city = useStoreState((state) => state.city)
    const district = useStoreState((state) => state.district)

    const [isAdressCookie, setIsAdressCookieCookie, removeCookie] = useCookies(['isAdressCookie']);
    
    const router = useRouter()
    const resetAdress = (() => {
        updateChosedRestaurant(-1)
        updateStreetName("")
        updateStreetNumber("")
        updateTakeAwayOrDelivery("0")
        updateZipCode("")
        removeCookie('isAdressCookie');
    })
    return (
        <Box>
            {
                takeAwayOrDelivery === "0" ? (

                    <Box padding="1rem">
                        <Text fontSize="xl" fontWeight="bold">VOS PIZZAS LIVRÉES 7/7J</Text>
                        <Text>Nous vous invitons à privilégier le paiement en ligne <Text as="span" textDecor="underline">En savoir plus</Text></Text>
                        <Flex bg="gray.200" align="center" justify="center" flexDirection="column" padding="15px" borderRadius="md" marginTop="30px">
                            <Text fontSize="sm">Livraison au</Text>
                            <Text fontSize="large" fontWeight="bold">{streetNumber}, {streetName}</Text>
                            <Text fontSize="large" fontWeight="bold"> {zipCode} </Text>
                        </Flex>
                        <Button marginTop="30px" colorScheme='whatsapp' width="100%" onClick={() => router.push('/order/menupromo')}>
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
                        <Button marginTop="30px" colorScheme='whatsapp' width="100%" onClick={() => router.push('/order/menupromo')}>
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
