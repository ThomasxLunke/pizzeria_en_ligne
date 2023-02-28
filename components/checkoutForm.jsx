import React from 'react'
import { Box, Text, Flex, Divider, FormControl, FormLabel, Input, Stack, Center } from '@chakra-ui/react'
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
import { useStoreState } from 'easy-peasy';


const CheckoutForm = () => {

    const chosedRestaurant = useStoreState((state) => state.chosedRestaurant)
    const takeAwayOrDelivery = useStoreState((state) => state.takeAwayOrDelivery)
    const streetName = useStoreState((state) => state.streetName)
    const streetNumber = useStoreState((state) => state.streetNumber)
    const zipCode = useStoreState((state) => state.zipCode)

    return (
        <Box marginBottom="60px">
            <Center>
                <Box marginTop="60px" width="90%">
                    <Box border="solid 1px" borderColor="gray.200" boxShadow='base'>
                        <Flex align="center" padding="10px">
                            <Box marginRight="10px">
                                <IoLocationSharp />
                            </Box>
                            <Text>Livraison au Rangueil</Text>
                        </Flex>
                        <Divider />
                        <Flex align="center" padding="10px" justify="space-between">
                            <Flex align="center">
                                <Box marginRight="10px">
                                    <HiOutlineClock />
                                </Box>
                                <Text> Au plus tôt</Text>
                            </Flex>
                            <Text textDecor="underline">Modifier</Text>
                        </Flex>
                    </Box>
                    <Flex>
                        <Box border="solid 1px" borderColor="gray.200" boxShadow='base' marginTop="40px" width="50%">
                            <Box>
                                <Stack direction='row' h='100px'>
                                    <Flex width="100%" align="center" justify="center" paddingX="20px">
                                        <Divider orientation='horizontal' border="solid 1px" borderColor="gray.200" />
                                        <Box>
                                            <Text width="300px" fontSize="2xl" textAlign="center" fontWeight="bold" >Qui passe commande ?</Text>
                                        </Box>
                                        <Divider orientation='horizontal' border="solid 1px" borderColor="gray.200" />
                                    </Flex>
                                </Stack>
                            </Box>
                            <FormControl paddingX="50px" marginBottom="20px">
                                <FormLabel>Nom</FormLabel>
                                <Input placeholder='Veuillez saisir votre nom' marginBottom="15px" />
                                <FormLabel>Prénom</FormLabel>
                                <Input placeholder='Veuillez saisir votre prénom' marginBottom="15px" />
                                <FormLabel>Mobile</FormLabel>
                                <Input placeholder='Pour vous contacter si besoin' marginBottom="15px" />
                                <FormLabel>Adresse e-mail</FormLabel>
                                <Input placeholder='Pour vous envoyez une confirmation' marginBottom="30px" />
                            </FormControl>
                        </Box>
                        <Box border="solid 1px" borderColor="gray.200" boxShadow='base' marginTop="40px" width="50%">
                            <Box>
                                <Stack direction='row' h='100px'>
                                    <Flex width="100%" align="center" justify="center" paddingX="20px">
                                        <Divider orientation='horizontal' border="solid 1px" borderColor="gray.200"  />
                                        <Box>
                                            <Text width="200px" fontSize="2xl" textAlign="center" fontWeight="bold" >Livraison au</Text>
                                        </Box>
                                        <Divider orientation='horizontal' border="solid 1px" borderColor="gray.200"  />
                                    </Flex>
                                </Stack>
                            </Box>
                            <Box paddingX="50px" marginBottom="20px">
                                <Flex flexDir="column">
                                    <Text>{streetNumber}</Text>
                                    <Text>{streetName}</Text>
                                    <Text>TOULOUSE (A MODIF) !!!!!</Text> 
                                    <Text>{zipCode}</Text>
                                </Flex>
                                <FormControl marginTop="20px">
                                    <FormLabel>Livraison sans contact : Consigne pour le livreur</FormLabel>
                                    <Input placeholder='Etage, interphone, code...' marginBottom="15px" />
                                </FormControl>
                            </Box>
                        </Box>
                    </Flex>
                    <Box border="solid 1px" borderColor="gray.200" boxShadow='base'>
                        <Box>
                            <Stack direction='row' h='100px'>
                                <Flex width="100%" align="center" justify="center" paddingX="20px">
                                    <Divider orientation='horizontal' border="solid 1px" borderColor="gray.200"  />
                                    <Box>
                                        <Text width="400px" fontSize="2xl" textAlign="center" fontWeight="bold" >Comment souhaitez-vous régler</Text>
                                    </Box>
                                    <Divider orientation='horizontal' border="solid 1px" borderColor="gray.200"  />
                                </Flex>
                            </Stack>
                        </Box>
                        <FormControl paddingX="50px">
                            <FormLabel>Titulaire de la carte</FormLabel>
                            <Input placeholder='Titulaire de la carte' marginBottom="15px" />
                            <FormLabel>Numéro de carte</FormLabel>
                            <Input placeholder='Veuillez saisir votre numéro de carte' marginBottom="15px" />
                            <FormLabel>Date d'expiration</FormLabel>
                            <Box>
                                <Input placeholder='Mois' marginBottom="15px" width="100px" marginRight="20px" />
                                <Input placeholder='Année' marginBottom="15px" width="100px" />
                            </Box>
                            <FormLabel>Cryptogramme visuel (CVC)</FormLabel>
                            <Input placeholder='Cryptogramme visuel' marginBottom="50px" />
                        </FormControl>
                    </Box>
                </Box>
            </Center>
        </Box>

    )
}

export default CheckoutForm
