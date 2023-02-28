import React, { useState } from 'react'
import { Link,Select, Box, Button, Center, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Input, FormControl, FormErrorMessage, Flex } from '@chakra-ui/react'
// eslint-disable-next-line import/extensions
import { useRestaurant, useRestaurantById } from '@/lib/hooks'
import { useForm } from "react-hook-form";
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useRouter } from 'next/router';


const AdressBox = () => {

    const { restaurants } = useRestaurant()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { idRestaurant: "", street: "", streetNumber: "" } })

    const updateChosedRestaurant = useStoreActions((store) => store.changeChosedRestaurant)
    const updateStreetName = useStoreActions((store) => store.changeStreetName)
    const updateStreetNumber = useStoreActions((store) => store.changeStreetNumber)
    const updateTakeAwayOrDelivery = useStoreActions((store) => store.changeTakeAwayOrDelivery)
    const updateZipCode = useStoreActions((store) => store.changeZipCode)


    const chosedRestaurant = useStoreState((state) => state.chosedRestaurant)
    const takeAwayOrDelivery = useStoreState((state) => state.takeAwayOrDelivery)
    const streetName = useStoreState((state) => state.streetName)
    const streetNumber = useStoreState((state) => state.streetNumber)
    const zipCode = useStoreState((state) => state.zipCode)


    const [indexTab, setIndexTab] = useState("0")
    const [optionzipCode, setOptionZipCode] = useState("0")

    //const getRestaurantById = useRestaurantById(2)

    const router = useRouter()

    const onSubmit = ((data) => {
        updateChosedRestaurant(data.idRestaurant)
        updateStreetName(data.street)
        updateStreetNumber(data.streetNumber)
        updateTakeAwayOrDelivery(indexTab.toString())
        updateZipCode(optionzipCode)
    })

    const resetAdress = (() => {
        updateChosedRestaurant(-1)
        updateStreetName("")
        updateStreetNumber("")
        updateTakeAwayOrDelivery("")
        updateZipCode("")
    })

    const handleTabChange = ((index) => {
        console.log(index)
        setIndexTab(index.toString())
    })

    return (
        <Center>
            <Box width="500px" marginTop="-220px" bg="white" boxShadow='dark-lg' rounded='md'>
                {chosedRestaurant === -1 ?

                    (<Tabs isFitted variant='enclosed' size="lg" onChange={(index) => handleTabChange(index)}>
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
                                    <Input placeholder='Votre ville ou le nom de votre Hut' marginBottom="10px" />
                                </FormControl>
                                <Button marginTop="95px" colorScheme='whatsapp' type='submit' width="100%">
                                    Trouver mon Pizza Hut
                                </Button>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>) : (
                        <Box>
                            {
                                takeAwayOrDelivery === "0" ?
                                    (<Box padding="1rem">
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
                                    </Box>) : (<Box>
                                        <Text fontSize="xl" fontWeight="bold">CLICK & COLLECT {takeAwayOrDelivery}</Text>

                                    </Box>)
                            }
                        </Box>
                    )
                }
            </Box>
        </Center>

    )
}

export default AdressBox
