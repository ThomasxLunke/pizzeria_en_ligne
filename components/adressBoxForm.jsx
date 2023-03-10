import React, { useEffect, useState } from 'react'
import { Link, Select, Box, Button, Center, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Input, FormControl, FormErrorMessage, Flex } from '@chakra-ui/react'
// eslint-disable-next-line import/extensions
import { useRestaurant, useRestaurantById } from '@/lib/hooks'
import { useForm } from "react-hook-form";
import { useStoreState, useStoreActions, useStore } from 'easy-peasy'
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const AdressBoxForm = () => {

    const { restaurants } = useRestaurant()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { idRestaurant: "", street: "", streetNumber: "" } })

    const updateChosedRestaurant = useStoreActions((store) => store.changeChosedRestaurant)
    const updateStreetName = useStoreActions((store) => store.changeStreetName)
    const updateStreetNumber = useStoreActions((store) => store.changeStreetNumber)
    const updateTakeAwayOrDelivery = useStoreActions((store) => store.changeTakeAwayOrDelivery)
    const updateZipCode = useStoreActions((store) => store.changeZipCode)
    const updateCity = useStoreActions((store) => store.changeCity)
    const updateDistrict = useStoreActions((store) => store.changeDistrict)
    const updateIsAdress = useStoreActions((store) => store.changeIsAdress)
    const updateLatitudeRestaurant = useStoreActions((store) => store.changeLatitudeRestaurant)
    const updateLongitudeRestaurant = useStoreActions((store) => store.changeLongitudeRestaurant)

    const [indexTab, setIndexTab] = useState("0")
    const [optionzipCode, setOptionZipCode] = useState("0")

    const [restaurantSearch, setRestaurantSearch] = useState("")
    const [restaurantSearchResult, setRestaurantSearchResult] = useState([])

    const [isAdressCookie, setIsAdressCookie] = useCookies(['isAdressCookie'])
    setIsAdressCookie('isAdressCookie', false)

    const zipCode = useStoreState((state) => state.zipCode)

    const onSubmit = ((data) => {
        updateChosedRestaurant(data.idRestaurant)
        updateStreetName(data.street)
        updateStreetNumber(data.streetNumber)
        updateTakeAwayOrDelivery(indexTab.toString())
        updateZipCode(optionzipCode)
        console.log(optionzipCode)
        updateIsAdress(true)
        setIsAdressCookie('isAdressCookie', true)
    })

    const handleTakeAwayInfo = ((id,city,district,zipCode,longitude,latitude) => {
        updateChosedRestaurant(id)
        updateStreetName("Avenue des Etats Unis (a replace!!)")
        updateStreetNumber("4")
        updateTakeAwayOrDelivery(indexTab.toString())
        updateZipCode(zipCode)
        updateCity(city)
        updateDistrict(district)
        updateIsAdress(true)
        updateLatitudeRestaurant(latitude)
        updateLongitudeRestaurant(longitude)
        setIsAdressCookie('isAdressCookie', true)
    })

    const handleTabChange = ((index) => {
        setIndexTab(index.toString())
    })

    useEffect(() => {
        const res = []
        restaurants.forEach(rest => {
            if (rest.zipCode.toString().includes(restaurantSearch) || rest.city.toUpperCase().includes(restaurantSearch.toUpperCase()) || rest.district.toUpperCase().includes(restaurantSearch.toUpperCase())) {
                if (restaurantSearch !== "") {
                    res.push(rest)
                }
            }
        })
        setRestaurantSearchResult(res)
    }, [restaurantSearch])


    return (

        <Tabs isFitted variant='enclosed' size="lg" onChange={(index) => handleTabChange(index)}>
            <TabList mb='1em' >
                <Tab
                    _selected={{ color: 'red', bg: 'white' }}
                    bg="gray.400"
                    color="gray.800"
                    fontWeight="bold"

                >Livraison</Tab>
                <Tab
                    _selected={{ color: 'red', bg: 'white' }}
                    bg="gray.400"
                    color="gray.800"
                    fontWeight="bold"
                >A Emporter</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Text fontSize="xl" fontWeight="bold">Vos Pizzas Livrées 7/7J</Text>
                    <Text fontSize="sm">Nous vous invitons à privilégier le paiement en ligne <Text as="span" textDecor="underline">En savoir plus</Text>
                    </Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.idRestaurant} marginBottom="10px">
                            <Select {...register('idRestaurant', { required: 'Ce champ est requis' })} placeholder='Code Postal' marginTop="20px" onChange={(e) => setOptionZipCode(e.target.selectedOptions[0].innerHTML)}>
                                {
                                    restaurants.map((restaurant) => (
                                        <option value={restaurant.id} key={restaurant.id}>{restaurant.zipCode}</option>
                                    ))
                                }
                            </Select>
                            <FormErrorMessage margin="0px">{errors.idRestaurant?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.street} marginBottom="10px">
                            <Input {...register('street', { required: 'Ce champ est requis' })} placeholder='Rue' />
                            <FormErrorMessage margin="0px">{errors.street?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.streetNumber} marginBottom="10px">
                            <Input {...register('streetNumber', { maxLength: { value: 4, message: '4 caractères maximum attendu' }, required: 'Ce champ est requis' })} placeholder='Numéro de rue' type="number" />
                            <FormErrorMessage margin="0px">{errors.streetNumber?.message}</FormErrorMessage>
                        </FormControl>

                        <Button mt={4} colorScheme='whatsapp' type='submit' width="100%">
                            Trouver mon Pizza Hut
                        </Button>

                    </form>

                </TabPanel>
                <TabPanel>
                    <Text fontSize="xl" fontWeight="bold">CLICK & COLLECT</Text>
                    <Text fontSize="sm">Vous pouvez commander à emporter dans votre Pizza Hut sans pass sanitaire.</Text>
                    <FormControl isRequired marginTop="20px">
                        <Input placeholder='Votre ville ou le nom de votre Hut' marginBottom="10px" onChange={(e) => { setRestaurantSearch(e.target.value) }} />
                    </FormControl>
                    <Box maxHeight="150px" overflow="auto" marginTop="10px">
                        {
                            restaurantSearchResult.map((rest) => (
                                <Box key={rest.id} border="solid 1px" borderColor="gray.200" padding="10px" onClick={() => handleTakeAwayInfo(rest.id,rest.city,rest.district,rest.zipCode, rest.longitude, rest.latitude)}>
                                    <Text fontWeight="bold">{rest.city} {rest.district}</Text>
                                    <Text>4 Avenue des Etats Unis (a replace)</Text>
                                    <Text>{rest.city} {rest.zipCode}</Text>
                                </Box>
                            ))
                        }
                    </Box>
                    <Button marginTop="20px" colorScheme='whatsapp' type='submit' width="100%">
                        Trouver mon Pizza Hut
                    </Button>
                </TabPanel>
            </TabPanels>
        </Tabs>



    )
}

export default AdressBoxForm
