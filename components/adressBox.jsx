import React from 'react'
import { FormControl, Box, Button, Center, Flex, Image, Divider, Text, Tabs, TabList, Tab, TabPanels, TabPanel, FormLabel, Input } from '@chakra-ui/react'

const AdressBox = () => {
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
                            <FormControl isRequired marginTop="20px">
                                <Input placeholder='Code Postal' marginBottom="10px" />
                                <Input placeholder='Rue' marginBottom="10px" />
                                <Input placeholder='Numéro de rue' marginBottom="10px" />
                            </FormControl>
                            <Button mt={4} colorScheme='whatsapp' type='submit' width="100%">
                                Trouver mon Pizza Hut
                            </Button>

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
