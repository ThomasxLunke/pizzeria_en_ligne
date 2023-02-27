import React from 'react'
import { Select, Box, Button, Center, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Input, FormControl, FormErrorMessage } from '@chakra-ui/react'
// eslint-disable-next-line import/extensions
import { useRestaurant } from '@/lib/hooks'
import { useForm } from "react-hook-form";

const AdressBox = () => {

    const { restaurants } = useRestaurant()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { idRestaurant: "", street: "", streetNumber: "" } })

    return (
        <Center>
            <Box width="500px" height="380px" marginTop="-220px" bg="white" boxShadow='dark-lg' rounded='md'>
                <Tabs isFitted variant='enclosed' size="lg">
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
                            <form onSubmit={handleSubmit((data) => {
                                console.log(data)
                            })}>
                                <FormControl isInvalid={errors.idRestaurant} marginBottom="10px">
                                    <Select {...register('idRestaurant', { required: 'Ce champ est requis' })} placeholder='Code Postal' marginTop="20px">
                                        {
                                            restaurants.map((restaurant) => (
                                                <option value={restaurant.id} key={restaurant.id}>{restaurant.zipCode}</option>
                                            ))
                                        }
                                    </Select>
                                    {errors.idRestaurant &&
                                        <FormErrorMessage>{errors.idRestaurant?.message}</FormErrorMessage>
                                    }
                                </FormControl>
                                <FormControl isInvalid={errors.street}  marginBottom="10px">
                                    <Input {...register('street', { required: 'Ce champ est requis' })} placeholder='Rue'  />
                                    {errors.street &&
                                        <FormErrorMessage>{errors.street?.message}</FormErrorMessage>
                                    }
                                </FormControl>

                                <FormControl isInvalid={errors.streetNumber}  marginBottom="10px">
                                    <Input {...register('streetNumber', { maxLength: { value: 4, message: '4 caractères maximum attendu' }, required: 'Ce champ est requis' })} placeholder='Numéro de rue' type="number" />
                                    {errors.streetNumber &&
                                        <FormErrorMessage>{errors.streetNumber?.message}</FormErrorMessage>
                                    }
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
                </Tabs>
            </Box>
        </Center>

    )
}

export default AdressBox
