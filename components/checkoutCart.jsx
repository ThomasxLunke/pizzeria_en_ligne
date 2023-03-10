import React from 'react'
import { Box, Button, Text, Center, Flex, Divider } from '@chakra-ui/react'
import { useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
import Cookie from "js-cookie"





const CheckoutCart = () => {

    const cart = useStoreState((state) => state.cart)
    const totalPrice = useStoreState((state) => state.totalPrice)
    
    const handleSubmit = () => {
        router.push('/delivery') 
        Cookie.set("deleveryPossible", true)

    }

    

    const router = useRouter()

    return (
        <Box width="100%">
            <Center>
                <Button colorScheme="whatsapp" width="90%" marginTop="120px" onClick={() => { handleSubmit()}}>
                    <Text padding="1px" fontWeight="bold">Commander</Text>
                </Button>
            </Center>

            <Box padding="15px" marginTop="20px" fontSize="sm">
                <Text marginBottom="10px">
                    Terms: Lorem ipsum dolor sit amet consectetur, adipisicing elit.<Text as="span" color="green"> Perferendis soluta maiores fuga animi mollitia aliquam fugiat. </Text>
                </Text>
                <Text marginBottom="10px">
                    Distinctio optio vel ipsum illo eligendi cum repudiandae debitis fugit. Error vitae hic autem!
                </Text>
                <Text marginBottom="10px">
                    <Text as="span" color="green"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Text>Iure ipsam doloribus, sequi culpa veritatis, vel et inventore deleniti molestiae reiciendis maxime quos nemo? Vel pariatur consequuntur dolorum officia consequatur fuga.
                </Text>
            </Box>
            <Center>
                <Divider marginX="30px" />
            </Center>

            <Box marginTop="20px">
                {
                    cart.map((item) => (
                        <Flex align="flex-start" fontWeight="bold" key={item.id} paddingBottom="20px" gap={10} justify="space-between">
                            <Flex gap={6} paddingLeft="20px">
                                <Text fontSize="xl">{item.numberOfItem}x</Text>
                                <Text fontSize="xl">{item.nameProduct}</Text>
                            </Flex>
                            <Text fontSize="xl" paddingRight="20px">{item.price} €</Text>
                        </Flex>
                    ))
                }
            </Box>
            <Center>
                <Divider marginX="30px" />
            </Center>
            <Flex marginTop="50px" justify="space-between" fontSize="xl" fontWeight="bold" >
                <Text paddingLeft="20px">Total :</Text>
                <Text paddingRight="20px">{totalPrice} €</Text>
            </Flex>

        </Box>


    )
}

export default CheckoutCart
